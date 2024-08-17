import { Component } from '@angular/core';
import { SidenavService } from '../../shared/sidenav/sidenav.service';

@Component({
  selector: 'app-admin-form-analytics',
  templateUrl: './admin-form-analytics.component.html',
  styleUrls: ['./admin-form-analytics.component.scss']
})
export class AdminFormAnalyticsComponent {
  // Star rating properties
  rating: number = 0;
  maxRating: number = 5;

  constructor(private sidenavService: SidenavService) {}

  openSidenav() {
    this.sidenavService.toggle();
  }

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