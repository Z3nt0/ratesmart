import { Component } from '@angular/core';
import { SidenavService } from '../../shared/sidenav/sidenav.service';

@Component({
  selector: 'app-admin-form-analytics',
  templateUrl: './admin-form-analytics.component.html',
  styleUrls: ['./admin-form-analytics.component.scss']
})
export class AdminFormAnalyticsComponent {
  constructor(private sidenavService: SidenavService) {}

  openSidenav() {
    this.sidenavService.toggle();
  }
}
