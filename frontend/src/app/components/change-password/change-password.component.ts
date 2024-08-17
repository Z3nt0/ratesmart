import { Component, OnInit } from '@angular/core';
import { SidenavService } from '../shared/sidenav/sidenav.service'; 
import { ThemeService } from '../../../services/theme.service';
import { ThemePalette } from '@angular/material/core'; // Import ThemePalette

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {
  user = {
    name: '',
    username: '',
    password: ''
  };

  settings: any = {
    theme: 'light' // Default theme, adjust as needed
  };

  color: ThemePalette = 'primary'; // Use a valid ThemePalette value

  constructor(
    private sidenavService: SidenavService,
    private themeService: ThemeService
  ) {}

  ngOnInit(): void {
    // Get the current theme from the ThemeService
    this.settings.theme = this.themeService.getTheme();
    // Optionally set the color property if needed
  }

  onSubmit() {
    console.log('User signed up with: ', this.user);
    // Add your sign-up logic here (e.g., sending data to the server)
  }

  openSidenav() {
    this.sidenavService.toggle();
  }
}
