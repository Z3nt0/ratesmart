import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
  signUpForm: FormGroup;
  errors: any = {};

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.signUpForm = this.fb.group({
      name: ['', Validators.required],
      username: ['', [Validators.required, Validators.maxLength(255)]],
      password: ['', [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern(/[!@#$%^&*(),.?":{}|<>]/) // Special character validation
      ]],
    });
  }


  onSubmit() {
    if (this.signUpForm.invalid) {
      return;
    }

    const user = this.signUpForm.value;

    this.authService.register(user).pipe(
      catchError(error => {
        if (error.status === 422) {
          this.errors = error.error.errors; // Capture validation errors
        } else {
          console.error('Error occurred during registration:', error);
        }
        return of(null);
      })
    ).subscribe(response => {
      if (response) {
        console.log('Registration successful:', response);
        this.router.navigate(['/login']); // Redirect to the login page
      }
    });
  }
}
