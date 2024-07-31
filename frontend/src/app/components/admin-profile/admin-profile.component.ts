import { Component } from '@angular/core';
import { SidenavService } from '../shared/sidenav/sidenav.service';
import { Router } from '@angular/router';

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

  constructor(private sidenavService: SidenavService, private router: Router) {}

  onSubmit() {
    console.log('User signed up with: ', this.user);
    // Add your sign-up logic here (e.g., sending data to the server)
  }
  
  openSidenav() {
    this.sidenavService.toggle();
  }
  
  changepass() {
    this.router.navigate(['/change-password']);
  }
}
