import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../services/theme.service'; // Adjust the import path as necessary

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ratesmart';

  constructor(private themeService: ThemeService) {}

  ngOnInit() {
    const theme = this.themeService.getTheme(); // Retrieve current theme
    document.body.classList.add(theme); // Add class to body
  }
}
