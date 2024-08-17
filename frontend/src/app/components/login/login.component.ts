import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  user = {
    username: '',
    password: ''
  };

  errorMessage: string | null = null;

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    const { username, password } = this.user;

    this.authService.login(username, password).subscribe({
      next: () => { // No need to handle the token here, AuthService handles navigation
        this.user = { username: '', password: '' }; 
        this.errorMessage = null;
      },
      error: (error: HttpErrorResponse) => {
        console.error('Login error:', error);

        if (error.status === 401) { 
          this.errorMessage = 'Invalid credentials. Please try again.';
        } else if (error.status === 0) { 
          this.errorMessage = 'Could not reach the server. Check your network connection or CORS configuration.';
        } else {
          this.errorMessage = 'An error occurred during login. Please try again later.';
        }
      }
    });
  }
}