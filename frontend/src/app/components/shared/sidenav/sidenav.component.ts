import { Component, ViewChild, OnInit, HostListener, AfterViewInit } from '@angular/core';
import { MatSidenav, MatDrawerMode } from '@angular/material/sidenav';
import { SidenavService } from './sidenav.service';
import { AuthService } from '../../../../services/auth.service';
import { ThemeService } from '../../../../services/theme.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit, AfterViewInit {
  @ViewChild('sidenav') sidenav!: MatSidenav;
  mode: MatDrawerMode = 'side';
  isDesktopView = false;
  public theme: string = 'light'; // Declare the theme property

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.checkScreenSize();
  }

  checkScreenSize() {
    const screenWidth = window.innerWidth;
    this.isDesktopView = screenWidth >= 1201 && screenWidth <= 1920;
    if (this.isDesktopView) {
      this.sidenavService.open(); // Automatically open sidenav for desktop view
    } else {
      this.sidenavService.close(); // Ensure sidenav is closed for smaller screens
    }
  }

  constructor(
    private sidenavService: SidenavService,
    private authService: AuthService,
    private themeService: ThemeService
  ) {}

  ngOnInit(): void {
    this.theme = this.themeService.getTheme(); // Initialize the theme
    this.checkScreenSize();
  }

  ngAfterViewInit() {
    if (this.sidenav) {
      this.sidenavService.setSidenav(this.sidenav); // Set the sidenav instance
    }
  }

  logout() {
    this.authService.logout().subscribe(() => {
      console.log('Logged out successfully');
    }, (error) => {
      console.error('Logout error', error);
    });
  }
}
