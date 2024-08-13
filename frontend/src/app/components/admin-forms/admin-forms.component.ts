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

  feedbackCards: { title: string, responses: number }[] = []; // Start with an empty array

  constructor(
    private sidenavService: SidenavService,
    private themeService: ThemeService
  ) {}

  ngOnInit(): void {
    
    this.settings.theme = this.themeService.getTheme();
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
}
