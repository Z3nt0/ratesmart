import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {

  constructor(private http: HttpClient, private router: Router) { }

  onSubmit(form: any) {
    // Form submission logic
    const formData = new FormData(form);

    this.http.post('http://your-laravel-app.test/api/register', formData)
      .subscribe(
        (response) => {
          console.log(response);
          // Handle successful registration
          this.router.navigate(['/']);
        },
        (error) => {
          console.error(error);
          // Handle registration errors
        }
      );
  }

}