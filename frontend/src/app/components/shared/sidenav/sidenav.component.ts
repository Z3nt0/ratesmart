import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { MatSidenav, MatDrawerMode } from '@angular/material/sidenav';
import { SidenavService } from './sidenav.service';
import { AuthService } from '../../../../services/auth.service'; // Adjusted import path

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements AfterViewInit {
  @ViewChild('sidenav') sidenav!: MatSidenav;
  mode: MatDrawerMode = 'over'; 

  constructor(
    private sidenavService: SidenavService,
    private authService: AuthService
  ) {}

  ngAfterViewInit() {
    if (this.sidenav) {
      this.sidenavService.setSidenav(this.sidenav);
    }
  }

  logout() {
    this.authService.logout().subscribe(() => {
      // Successful logout is already handled in AuthService
      console.log('Logged out successfully');
    }, (error) => {
      // Handle logout error
      console.error('Logout error', error);
    });
  }
}
