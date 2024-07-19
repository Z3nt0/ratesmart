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
    this.router.navigate(['/sign-up']);
  }
  
  onLogin() {
    this.router.navigate(['/login']);
  }
  
}
