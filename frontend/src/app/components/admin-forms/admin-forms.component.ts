import { Component, OnInit } from '@angular/core';
import { SidenavService } from '../shared/sidenav/sidenav.service';
import { ThemeService } from '../../../services/theme.service';
import { HttpClient } from '@angular/common/http';

interface Form {
  formid: number;
  formtitle: string;
  responses: number;
  // ... other properties from your Laravel response
}

@Component({
  selector: 'app-admin-forms',
  templateUrl: './admin-forms.component.html',
  styleUrls: ['./admin-forms.component.scss']
})
export class AdminFormsComponent implements OnInit {
  settings: any = {
    theme: 'light'
  };

  color: string = 'default'; 
  feedbackCards: Form[] = []; 

  constructor(
    private sidenavService: SidenavService,
    private themeService: ThemeService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.settings.theme = this.themeService.getTheme();
    this.color = this.getColorForTheme(this.settings.theme); 
    this.fetchForms(); 
  }

  openSidenav() {
    this.sidenavService.toggle();
  }

  addNewFeedbackCard() {
    this.feedbackCards.push({
      formid: 0,
      formtitle: '',
      responses: 0
    });
  }

  saveForm(index: number) {
    const form = this.feedbackCards[index];

    if (form.formid === 0) {
      this.http.post<Form>('/api/forms', { formtitle: form.formtitle }) 
        .subscribe((response) => {
          this.feedbackCards[index] = response; 
        });
    } else {
      this.http.put(`/api/forms/${form.formid}`, { formtitle: form.formtitle }) 
        .subscribe();
    }
  }

  removeFeedbackCard(card: Form) {
    const index = this.feedbackCards.indexOf(card);
    if (index > -1) {
      this.feedbackCards.splice(index, 1);

      if (card.formid !== 0) {
        this.http.delete(`/api/forms/${card.formid}`)
          .subscribe();
      }
    }
  }

  private getColorForTheme(theme: string): string {
    return theme === 'dark' ? 'dark-palette' : 'light-palette';
  }

  private fetchForms() {
    this.http.get<Form[]>('/api/forms', { responseType: 'json' })
      .subscribe(
        (forms) => {
          this.feedbackCards = forms;
        },
        (error) => {
          console.error('Error fetching forms:', error);
        }
      );
  }
}