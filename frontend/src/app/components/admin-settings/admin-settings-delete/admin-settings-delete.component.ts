import { Component, Input } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { SidenavService } from '../../shared/sidenav/sidenav.service'; 

@Component({
  selector: 'app-admin-settings',
  templateUrl: './admin-settings-delete.component.html',
  styleUrls: ['./admin-settings-delete.component.scss']
})
export class AdminSettingsDeleteComponent {
  @Input() color: ThemePalette = 'primary'; // Default value

  settings: any = {
    notificationsEnabled: true,
    theme: 'light'
  };

  toggleNotifications() {
    if (this.settings) {
      this.settings.notificationsEnabled = !this.settings.notificationsEnabled;
    }
  }

  changeTheme(newTheme: string) {
    if (this.settings) {
      this.settings.theme = newTheme;
    }
  }
  constructor(private sidenavService: SidenavService) {}

  openSidenav() {
    this.sidenavService.toggle();
  }
}
