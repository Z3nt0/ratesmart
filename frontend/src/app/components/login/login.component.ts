import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

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

  // Optional property for error messages
  errorMessage: string | null = null;

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    const { username, password } = this.user;
    
    this.authService.login(username, password).subscribe(
      (response: { token: string }) => {
        // Store the token
        localStorage.setItem('token', response.token);
        // Redirect to admin dashboard
        this.router.navigate(['/admin-dashboard']);
        // Optionally reset the form
        this.user = { username: '', password: '' };
        this.errorMessage = null;
      },
      (error) => {
        console.error('Login failed', error);
        this.errorMessage = 'Login failed. Please try again.';
      }
    );
  }
}
