import { Component } from '@angular/core';
import { SidenavService } from '../../../shared/sidenav/sidenav.service';
import { ThemePalette } from '@angular/material/core'; // Import ThemePalette

@Component({
  selector: 'app-admin-form-customize-logo',
  templateUrl: './admin-form-customize-logo.component.html',
  styleUrls: ['./admin-form-customize-logo.component.scss']
})
export class AdminFormCustomizeLogoComponent {
  color: ThemePalette; // Use ThemePalette type

  constructor(private sidenavService: SidenavService) {
    // Set a default value for color
    this.color = 'primary'; // This can be 'primary', 'accent', or 'warn'
  }

  openSidenav() {
    this.sidenavService.toggle(); // Ensure SidenavService has a `toggle` method
  }
}
