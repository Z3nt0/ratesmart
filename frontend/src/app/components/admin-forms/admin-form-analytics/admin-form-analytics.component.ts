import { Component, OnInit } from '@angular/core';
import { SidenavService } from '../../shared/sidenav/sidenav.service';
import { ThemeService } from '../../../../services/theme.service'; 

@Component({
  selector: 'app-admin-form-analytics',
  templateUrl: './admin-form-analytics.component.html',
  styleUrls: ['./admin-form-analytics.component.scss']
})
export class AdminFormAnalyticsComponent implements OnInit {
  settings: any = { theme: 'light' }; 
  color: string = 'default'; 

  // Star rating properties
  rating: number = 0;
  maxRating: number = 5;

  constructor(
    private sidenavService: SidenavService,
    private themeService: ThemeService 
  ) {}

  ngOnInit(): void {
    this.settings.theme = this.themeService.getTheme(); 
    this.color = this.getColorForTheme(this.settings.theme); 
  }

  openSidenav() {
    this.sidenavService.toggle();
  }

  private getColorForTheme(theme: string): string {
    return theme === 'dark' ? 'dark-palette' : 'light-palette';
  }

  // Star rating methods
  setRating(value: number) {
    this.rating = value;
  }

  isStarActive(index: number) {
    return index < this.rating;
  }

  get stars() {
    return Array(this.maxRating).fill(0).map((_, i) => i + 1);
  }
}