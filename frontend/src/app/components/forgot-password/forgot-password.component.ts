import { Component } from '@angular/core';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent {
  user = {
    email: '',
  };
  onSubmit() {
    console.log('User signed up with: ', this.user);
    // Add your sign-up logic here (e.g., sending data to the server)
  }
}


