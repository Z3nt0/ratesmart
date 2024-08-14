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

  themeText: string = 'Light Mode'; // Initial value

  constructor(
    private sidenavService: SidenavService,
    public dialog: MatDialog,
    private themeService: ThemeService
  ) {
    this.settings.theme = this.themeService.getTheme();
    this.themeText = this.settings.theme === 'dark' ? 'Dark Mode' : 'Light Mode';
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
    this.themeText = newTheme === 'dark' ? 'Dark Mode' : 'Light Mode';
  }

  onColorChange(event: any) {
    const newColor = event.value;
    this.themeService.setColorPalette(newColor);

    // Update the radio button selection based on the current color palette
    const radioButtons = document.querySelectorAll('mat-radio-button');
    radioButtons.forEach((button: any) => {
      if (button.value === newColor) {
        button.checked = true;
      } else {
        button.checked = false;
      }
    });
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
