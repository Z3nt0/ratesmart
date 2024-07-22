import { Component } from '@angular/core';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent {
  user = {
    name: '',
    username: '',
    password: ''
  };

  onSubmit() {
    console.log('User signed up with: ', this.user);
    // Add your sign-up logic here (e.g., sending data to the server)
  }
}

