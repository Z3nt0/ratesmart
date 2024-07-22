import { Component } from '@angular/core';
import { SidenavService } from '../shared/sidenav/sidenav.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent {
  recentForms = [
    { title: 'Form 1' },
    { title: 'Form 2' },
    { title: 'Form 3' }
  ];

  constructor(private sidenavService: SidenavService) {}

  openSidenav() {
    this.sidenavService.toggle();
  }
}
