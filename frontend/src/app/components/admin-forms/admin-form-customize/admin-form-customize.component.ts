import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SidenavService } from '../../shared/sidenav/sidenav.service';
import { ThemeService } from '../../../../services/theme.service'; // Ensure correct path

@Component({
  selector: 'app-admin-form-customize',
  templateUrl: './admin-form-customize.component.html',
  styleUrls: ['./admin-form-customize.component.scss']
})
export class AdminFormCustomizeComponent implements OnInit {
  firstFormGroup!: FormGroup;
  secondFormGroup!: FormGroup;
  isLinear = false;
  sections: { title: string; questions: { questionText: string; responseType: string; minScale?: number; maxScale?: number }[] }[] = [
    {
      title: 'Edit Title',
      questions: [{ questionText: '', responseType: '' }]
    }
  ];

  selectedStep: number = 0;
  visibleStepRange: { start: number; end: number } = { start: 0, end: 3 };
  scaleOptions = [1, 2, 3, 4, 5]; 

  settings = {
    theme: 'default-theme'
  };
  color: string = 'default'; 

  constructor(
    private sidenavService: SidenavService,
    private _formBuilder: FormBuilder,
    private themeService: ThemeService 
  ) {}

  ngOnInit(): void {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });

    this.settings.theme = this.themeService.getTheme();
    this.color = 'primary';
    this.updateVisibleSteps(); // Initialize visible steps on component load
  }

  openSidenav() {
    this.sidenavService.toggle();
  }

  addSection() {
    this.sections.push({
      title: 'Edit Title',
      questions: [{ questionText: '', responseType: '' }]
    });
    this.updateVisibleSteps();
    this.selectedStep = this.sections.length - 1; 
  }

  addQuestion(sectionIndex: number) {
    this.sections[sectionIndex].questions.push({
      questionText: '',
      responseType: ''
    });
  }

  deleteSection(sectionIndex: number) {
    if (sectionIndex >= 0 && sectionIndex < this.sections.length) {
      this.sections.splice(sectionIndex, 1);
      if (this.selectedStep >= this.sections.length) {
        this.selectedStep = this.sections.length - 1;
      }
      this.updateVisibleSteps();
    }
  }

  deleteQuestion(sectionIndex: number, questionIndex: number) {
    if (sectionIndex >= 0 && sectionIndex < this.sections.length) {
      this.sections[sectionIndex].questions.splice(questionIndex, 1);
      
      if (this.sections[sectionIndex].questions.length === 0 && sectionIndex === this.selectedStep) {
        this.selectedStep = Math.max(0, sectionIndex - 1);
      }
    }
  }

  prevStep() {
    if (this.selectedStep > 0) {
      this.selectedStep--;
      this.updateVisibleSteps();
    }
  }

  nextStep() {
    if (this.selectedStep < this.sections.length - 1) {
      this.selectedStep++;
      this.updateVisibleSteps();
    }
  }

  goToStep(step: number) {
    if (step >= 0 && step < this.sections.length) {
      this.selectedStep = step;
      this.updateVisibleSteps();
    }
  }

  getVisibleSteps(): number[] {
    const stepCount = this.sections.length;
    const maxVisibleSteps = 4; // Displaying up to 4 steps

    let startIndex: number;
    let endIndex: number;

    if (stepCount <= maxVisibleSteps) {
      startIndex = 0;
      endIndex = stepCount - 1;
    } else {
      startIndex = Math.max(this.selectedStep - Math.floor(maxVisibleSteps / 2), 0);
      endIndex = startIndex + maxVisibleSteps - 1;

      if (endIndex >= stepCount) {
        endIndex = stepCount - 1;
        startIndex = Math.max(endIndex - maxVisibleSteps + 1, 0);
      }
    }

    return Array.from({ length: endIndex - startIndex + 1 }, (_, i) => startIndex + i);
  }

  private updateVisibleSteps() {
    const stepCount = this.sections.length;
    const maxVisibleSteps = 4; // Displaying up to 4 steps

    if (stepCount <= maxVisibleSteps) {
      this.visibleStepRange.start = 0;
      this.visibleStepRange.end = stepCount - 1;
    } else {
      this.visibleStepRange.start = Math.max(this.selectedStep - Math.floor(maxVisibleSteps / 2), 0);
      this.visibleStepRange.end = this.visibleStepRange.start + maxVisibleSteps - 1;

      if (this.visibleStepRange.end >= stepCount) {
        this.visibleStepRange.end = stepCount - 1;
        this.visibleStepRange.start = Math.max(this.visibleStepRange.end - maxVisibleSteps + 1, 0);
      }
    }
  }

  onResponseTypeChange(responseType: string, questionIndex: number) {
    if (responseType !== 'stars') {
      this.sections[this.selectedStep].questions[questionIndex].minScale = undefined;
      this.sections[this.selectedStep].questions[questionIndex].maxScale = undefined;
    }
  }

  saveSection() {
    console.log('Section saved:', this.sections[this.selectedStep]);
  }
}
