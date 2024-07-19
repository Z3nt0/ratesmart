import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.scss']
})
export class AdminProfileComponent {
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
