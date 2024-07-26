import { Component } from '@angular/core';
import { SidenavService } from '../../shared/sidenav/sidenav.service'; // Adjust path if necessary


@Component({
  selector: 'app-admin-form-customize',
  templateUrl: './admin-form-customize.component.html',
  styleUrls: ['./admin-form-customize.component.scss']
})
export class AdminFormCustomizeComponent {
  constructor(private sidenavService: SidenavService) {}

  openSidenav() {
    this.sidenavService.toggle();
  }
}
