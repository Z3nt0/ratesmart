import { Component } from '@angular/core';
import { SidenavService } from '../shared/sidenav/sidenav.service'; 

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss']
})
export class AboutPageComponent {
  constructor(private sidenavService: SidenavService) {}

  openSidenav() {
    this.sidenavService.toggle();
  }

}
