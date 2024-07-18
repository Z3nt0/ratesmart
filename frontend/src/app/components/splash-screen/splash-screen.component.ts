import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-splash-screen',
  templateUrl: './splash-screen.component.html',
  styleUrls: ['./splash-screen.component.scss']
})
export class SplashScreenComponent {
  constructor(private router: Router) {}

  onSignUp() {
    console.log('Sign Up clicked');
    this.router.navigate(['/sign-up']);
  }
  
  onLogin() {
    console.log('Login clicked');
    this.router.navigate(['/login']);
  }
  
}
