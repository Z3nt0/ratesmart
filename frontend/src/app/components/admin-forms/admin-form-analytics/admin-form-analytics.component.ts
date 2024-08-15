import { Component, OnInit } from '@angular/core';
import { SidenavService } from '../../shared/sidenav/sidenav.service';
import { ThemeService } from '../../../../services/theme.service'; // Ensure correct path

@Component({
  selector: 'app-admin-form-analytics',
  templateUrl: './admin-form-analytics.component.html',
  styleUrls: ['./admin-form-analytics.component.scss']
})
export class AdminFormAnalyticsComponent implements OnInit {
  settings: any = { theme: 'light' }; // Define settings property
  color: string = 'default'; // Define color property

  constructor(
    private sidenavService: SidenavService,
    private themeService: ThemeService // Inject ThemeService
  ) {}

  ngOnInit(): void {
    this.settings.theme = this.themeService.getTheme(); // Initialize settings
    this.color = this.getColorForTheme(this.settings.theme); // Set color based on theme
  }

  openSidenav() {
    this.sidenavService.toggle();
  }

  private getColorForTheme(theme: string): string {
    // Return a color or palette based on the theme
    return theme === 'dark' ? 'dark-palette' : 'light-palette';
  }
}
