import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { MatSidenav, MatDrawerMode } from '@angular/material/sidenav';
import { SidenavService } from './sidenav.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements AfterViewInit {
  @ViewChild('sidenav') sidenav!: MatSidenav;
  mode: MatDrawerMode = 'over'; // Default mode value

  constructor(private sidenavService: SidenavService) {}

  ngAfterViewInit() {
    // Make sure the sidenav reference is available before setting it
    if (this.sidenav) {
      this.sidenavService.setSidenav(this.sidenav);
    }
  }

  logout() {
    // Perform logout logic here
  }
}
