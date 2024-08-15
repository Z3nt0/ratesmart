import { Component } from '@angular/core';
import { SidenavService } from '../../../shared/sidenav/sidenav.service';
import { ThemePalette } from '@angular/material/core'; 
import { ThemeService } from '../../../../../services/theme.service'; // Import ThemePalette

@Component({
  selector: 'app-admin-form-customize-logo',
  templateUrl: './admin-form-customize-logo.component.html',
  styleUrls: ['./admin-form-customize-logo.component.scss']
})
export class AdminFormCustomizeLogoComponent {
  
  settings: any = {
    theme: 'light'
  };

  color: ThemePalette = 'primary'; // Use a valid ThemePalette value

  constructor(
    private sidenavService: SidenavService,
    private themeService: ThemeService) {}

  ngOnInit(): void {
    
    this.settings.theme = this.themeService.getTheme();
    
  }

  openSidenav() {
    this.sidenavService.toggle();
  }
}
