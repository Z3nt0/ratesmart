import { Component, Input } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-admin-settings',
  templateUrl: './admin-settings.component.html',
  styleUrls: ['./admin-settings.component.scss']
})
export class AdminSettingsComponent {
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
}
