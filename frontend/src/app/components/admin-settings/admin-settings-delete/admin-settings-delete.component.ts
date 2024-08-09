import { Component, Input } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { SidenavService } from '../../shared/sidenav/sidenav.service'; 
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-admin-settings',
  templateUrl: './admin-settings-delete.component.html',
  styleUrls: ['./admin-settings-delete.component.scss']
})
export class AdminSettingsDeleteComponent {
  constructor(public dialogRef: MatDialogRef<AdminSettingsDeleteComponent>) {}

  onCancelClick(): void {
    this.dialogRef.close(false);
  }

  onDeleteClick(): void {
    this.dialogRef.close(true);
  }
}