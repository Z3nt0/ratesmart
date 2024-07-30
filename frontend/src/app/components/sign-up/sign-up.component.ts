import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
  user = {
    name: '',
    username: '',
    password: ''
  };

  constructor(private http: HttpClient, private router: Router) {}

  onSubmit() {
    console.log('User signed up with: ', this.user);
    this.http.post('http://your-laravel-api.com/api/register', this.user).subscribe(
      (response) => {
        console.log('User signed up with: ', response);
        this.router.navigate(['/login']);
      },
      (error) => {
        console.error('Error signing up: ', error);
      }
    );
  }
}
