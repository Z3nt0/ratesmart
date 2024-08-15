import { Component, OnInit } from '@angular/core';
import { SidenavService } from '../shared/sidenav/sidenav.service'; 
import { ThemeService } from '../../../services/theme.service';

@Component({
  selector: 'app-admin-forms',
  templateUrl: './admin-forms.component.html',
  styleUrls: ['./admin-forms.component.scss']
})
export class AdminFormsComponent implements OnInit {
  settings: any = {
    theme: 'light'
  };

  color: string = 'default'; // Default color or palette

  feedbackCards: { title: string, responses: number }[] = []; // Start with an empty array

  constructor(
    private sidenavService: SidenavService,
    private themeService: ThemeService
  ) {}

  ngOnInit(): void {
    // Get the current theme from the ThemeService
    this.settings.theme = this.themeService.getTheme();
    // Initialize the color property if needed
    this.color = this.getColorForTheme(this.settings.theme);
  }

  openSidenav() {
    this.sidenavService.toggle();
  }

  addFeedbackCard() {
    this.feedbackCards.push({ title: 'New Feedback Title', responses: 0 });
  }

  removeFeedbackCard(card: { title: string, responses: number }) {
    const index = this.feedbackCards.indexOf(card);
    if (index > -1) {
      this.feedbackCards.splice(index, 1);
    }
  }

  private getColorForTheme(theme: string): string {
    // Return a color or palette based on the theme
    return theme === 'dark' ? 'dark-palette' : 'light-palette';
  }
}
