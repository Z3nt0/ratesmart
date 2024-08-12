import { Component } from '@angular/core';
import { SidenavService } from '../shared/sidenav/sidenav.service'; 
import { ThemeService } from '../../../services/theme.service';
@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss']
})
export class AboutPageComponent {

  settings: any = {
    theme: 'light'
  };

  constructor(
    private sidenavService: SidenavService,
    private themeService: ThemeService) {}

    ngOnInit(): void {
      // Get the current theme from the ThemeService
      this.settings.theme = this.themeService.getTheme();
    }

  openSidenav() {
    this.sidenavService.toggle();
  }

}
