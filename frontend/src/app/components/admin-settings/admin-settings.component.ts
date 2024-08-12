import { Component, Input } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { AdminSettingsDeleteComponent } from './admin-settings-delete/admin-settings-delete.component';
import { SidenavService } from '../shared/sidenav/sidenav.service';
import { ThemeService } from '../../../services/theme.service';

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

  constructor(
    private sidenavService: SidenavService,
    public dialog: MatDialog,
    private themeService: ThemeService
  ) {
    this.settings.theme = this.themeService.getTheme();
  }

  openSidenav() {
    this.sidenavService.toggle();
  }

  toggleNotifications() {
    if (this.settings) {
      this.settings.notificationsEnabled = !this.settings.notificationsEnabled;
    }
  }

  toggleTheme(event: any) {
    const newTheme = event.checked ? 'dark' : 'light';
    this.settings.theme = newTheme;
    this.themeService.setTheme(newTheme);
  }

  onColorChange(event: any) {
    const newColor = event.value; // Get the selected color value
    this.themeService.setColor(newColor);
  }

  openDeleteDialog(): void {
    const dialogRef = this.dialog.open(AdminSettingsDeleteComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // Handle account deletion
        console.log('Account deleted');
      } else {
        // Handle cancellation
        console.log('Deletion cancelled');
      }
    });
  }
}
