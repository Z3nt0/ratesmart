import { Component, OnInit } from '@angular/core';
import { SidenavService } from '../shared/sidenav/sidenav.service';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { ThemeService } from '../../../services/theme.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {
  recentForms = [
    { title: 'Form 1' },
    { title: 'Form 2' },
    { title: 'Form 3' }
  ];

  settings: any = {
    theme: 'light'
  };

  constructor(
    private sidenavService: SidenavService,
    private themeService: ThemeService
  ) {}

  ngOnInit(): void {
    // Get the current theme from the ThemeService
    this.settings.theme = this.themeService.getTheme();
  }

  openSidenav() {
    this.sidenavService.toggle();
  }
}