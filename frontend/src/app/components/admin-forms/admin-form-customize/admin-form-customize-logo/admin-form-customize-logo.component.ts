import { Component } from '@angular/core';
import { SidenavService } from '../../../shared/sidenav/sidenav.service';
@Component({
  selector: 'app-admin-form-customize-logo',
  templateUrl: './admin-form-customize-logo.component.html',
  styleUrls: ['./admin-form-customize-logo.component.scss']
})
export class AdminFormCustomizeLogoComponent {
  constructor(private sidenavService: SidenavService) {}

  openSidenav() {
    this.sidenavService.toggle(); // Ensure SidenavService has a `toggle` method
  }
}
