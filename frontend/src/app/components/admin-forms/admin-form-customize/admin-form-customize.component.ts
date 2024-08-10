import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SidenavService } from '../../shared/sidenav/sidenav.service';

@Component({
  selector: 'app-admin-form-customize',
  templateUrl: './admin-form-customize.component.html',
  styleUrls: ['./admin-form-customize.component.scss']
})
export class AdminFormCustomizeComponent implements OnInit {
  firstFormGroup!: FormGroup;
  secondFormGroup!: FormGroup;
  isLinear = false;
  sections: { title: string; questions: { questionText: string; responseType: string }[] }[] = [
    {
      title: 'Edit Title',
      questions: [{ questionText: '', responseType: '' }]
    }
  ];

  selectedStep: number = 0;
  visibleStepRange: { start: number; end: number } = { start: 0, end: 4 };

  constructor(private sidenavService: SidenavService, private _formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
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
    this.selectedStep = this.sections.length - 1; // Move to the newly added section
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
    }
  }

  deleteQuestion(sectionIndex: number, questionIndex: number) {
    if (sectionIndex >= 0 && sectionIndex < this.sections.length) {
      this.sections[sectionIndex].questions.splice(questionIndex, 1);
      // Ensure that selectedStep remains valid
      if (this.sections[sectionIndex].questions.length === 0 && sectionIndex === this.selectedStep) {
        this.selectedStep = Math.max(0, sectionIndex - 1);
      }
    }
  }

  prevStep() {
    if (this.selectedStep > 0) {
      this.selectedStep--;
    }
  }

  nextStep() {
    if (this.selectedStep < this.sections.length - 1) {
      this.selectedStep++;
    }
  }

  goToStep(step: number) {
    if (step >= 0 && step < this.sections.length) {
      this.selectedStep = step;
    }
  }

  getVisibleSteps(): number[] {
    const stepCount = this.sections.length;
    const maxVisibleSteps = 5;

    let startIndex: number;
    let endIndex: number;

    if (stepCount <= maxVisibleSteps) {
      startIndex = 0;
      endIndex = stepCount - 1;
    } else {
      const midPoint = Math.floor(maxVisibleSteps / 2);
      if (this.selectedStep <= midPoint) {
        startIndex = 0;
        endIndex = maxVisibleSteps - 1;
      } else if (this.selectedStep >= stepCount - midPoint - 1) {
        startIndex = stepCount - maxVisibleSteps;
        endIndex = stepCount - 1;
      } else {
        startIndex = this.selectedStep - midPoint;
        endIndex = this.selectedStep + midPoint;
      }
    }

    return Array.from({ length: endIndex - startIndex + 1 }, (_, index) => startIndex + index);
  }

  private updateVisibleSteps() {
    const stepCount = this.sections.length;
    const maxVisibleSteps = 5;

    if (stepCount <= maxVisibleSteps) {
      this.visibleStepRange.start = 0;
      this.visibleStepRange.end = stepCount - 1;
    } else {
      const midPoint = Math.floor(maxVisibleSteps / 2);
      if (this.selectedStep <= midPoint) {
        this.visibleStepRange.start = 0;
        this.visibleStepRange.end = maxVisibleSteps - 1;
      } else if (this.selectedStep >= stepCount - midPoint - 1) {
        this.visibleStepRange.start = stepCount - maxVisibleSteps;
        this.visibleStepRange.end = stepCount - 1;
      } else {
        this.visibleStepRange.start = this.selectedStep - midPoint;
        this.visibleStepRange.end = this.selectedStep + midPoint;
      }
    }
  }

  saveSection() {
    // Implement your save logic here
    console.log('Section saved:', this.sections[this.selectedStep]);
  }
}
