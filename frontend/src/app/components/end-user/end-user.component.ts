import { Component, OnInit } from '@angular/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { MatToolbarModule } from '@angular/material/toolbar'; // Import MatToolbarModule
import { MatIconModule } from '@angular/material/icon'; // Import MatIconModule
import { CommonModule } from '@angular/common'; // Import CommonModule
import { SidenavService } from '../shared/sidenav/sidenav.service'; 
import { ThemeService } from '../../../services/theme.service';

@Component({
  selector: 'app-end-user',
  templateUrl: './end-user.component.html',
  styleUrls: ['./end-user.component.scss'],
  standalone: true,
  imports: [
    CommonModule, // Import CommonModule to use directives like ngClass
    MatCardModule, 
    MatDatepickerModule, 
    MatNativeDateModule,
    MatToolbarModule, // Add MatToolbarModule
    MatIconModule // Add MatIconModule
  ],
})
export class EndUserComponent implements OnInit {
  selected: Date | null = null; // Initialize with null

  settings: any = {
    theme: 'light'
  };

  color: string = 'default'; 

  constructor(
    private sidenavService: SidenavService,
    private themeService: ThemeService
  ) {}

  ngOnInit(): void {
    // Initialize settings and color if needed
    this.settings.theme = this.themeService.getTheme();
  }

  openSidenav() {
    this.sidenavService.toggle();
  }
}
