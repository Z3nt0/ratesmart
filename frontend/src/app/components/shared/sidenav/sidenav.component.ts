import { Component, ViewChild, AfterViewInit, OnInit,} from '@angular/core';
import { MatSidenav, MatDrawerMode } from '@angular/material/sidenav';
import { SidenavService } from './sidenav.service';
import { AuthService } from '../../../../services/auth.service';
import { ThemeService } from '../../../../services/theme.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements AfterViewInit, OnInit {
  @ViewChild('sidenav') sidenav!: MatSidenav;
  mode: MatDrawerMode = 'over'; // Default mode value

  public theme: string = 'light'; // Public property for the theme

  constructor(
    private sidenavService: SidenavService,
    private authService: AuthService,
    private themeService: ThemeService // Inject ThemeService
  ) {}

  ngOnInit(): void {
    // Initialize the theme property
    this.theme = this.themeService.getTheme();
  }

  ngAfterViewInit() {
    // Make sure the sidenav reference is available before setting it
    if (this.sidenav) {
      this.sidenavService.setSidenav(this.sidenav);
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
