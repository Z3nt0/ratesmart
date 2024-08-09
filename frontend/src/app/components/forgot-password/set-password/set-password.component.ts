import { Component } from '@angular/core';

@Component({
  selector: 'app-set-password',
  templateUrl: './set-password.component.html',
  styleUrls: ['./set-password.component.scss']
})
export class SetPasswordComponent {
    user = {
      password: '',
      confirmpassword: '',
    };
    onSubmit() {
      console.log('User signed up with: ', this.user);
    }
  }


