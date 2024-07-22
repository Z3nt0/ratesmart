import { Injectable } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Injectable({
  providedIn: 'root'
})
export class SidenavService {
  private sidenav?: MatSidenav;

  setSidenav(sidenav: MatSidenav) {
    this.sidenav = sidenav;
  }

  open() {
    if (this.sidenav) {
      this.sidenav.open();
    }
  }

  close() {
    if (this.sidenav) {
      this.sidenav.close();
    }
  }

  toggle() {
    if (this.sidenav) {
      this.sidenav.toggle();
    }
  }
}
