import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatChipInputEvent } from '@angular/material/chips';
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
  sections: {
    title: string;
    questions: {
      questionText: string;
      responseType: string;
      options?: string[];
      dropdownOptions?: string[];
      chips?: string[];
      numericValue?: number;
      textValue?: string;
      minStars?: number;
      maxStars?: number;
      minRating?: number;
      maxRating?: number;
      selectedOption?: string;
    }[]
  }[] = [
    {
      title: 'Edit Title',
      questions: [{
        questionText: '',
        responseType: '',
        options: [],
        dropdownOptions: [],
        chips: [],
        numericValue: undefined,
        textValue: '',
        minStars: undefined,
        maxStars: undefined,
        minRating: undefined,
        maxRating: undefined,
        selectedOption: ''
      }]
    }
  ];

  selectedStep: number = 0;
  visibleStepRange: { start: number; end: number } = { start: 0, end: 4 };
  starOptions: number[] = [1, 2, 3, 4, 5];
  ratingOptions: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  newOption: string = '';
  chipInput = new FormControl('');

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
      questions: [{
        questionText: '',
        responseType: '',
        options: [],
        dropdownOptions: [],
        chips: [],
        numericValue: undefined,
        textValue: '',
        minStars: undefined,
        maxStars: undefined,
        minRating: undefined,
        maxRating: undefined,
        selectedOption: ''
      }]
    });
    this.updateVisibleSteps();
    this.selectedStep = this.sections.length - 1;
  }

  addQuestion(sectionIndex: number) {
    this.sections[sectionIndex].questions.push({
      questionText: '',
      responseType: '',
      options: [],
      dropdownOptions: [],
      chips: [],
      numericValue: undefined,
      textValue: '',
      minStars: undefined,
      maxStars: undefined,
      minRating: undefined,
      maxRating: undefined,
      selectedOption: ''
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
      if (this.sections[sectionIndex].questions.length === 0 && sectionIndex === this.selectedStep) {
        this.selectedStep = Math.max(0, sectionIndex - 1);
      }
    }
  }

  deleteChip(sectionIndex: number, questionIndex: number, chipIndex: number) {
    const question = this.sections[sectionIndex].questions[questionIndex];
    if (question.chips && question.chips.length > chipIndex) {
      question.chips.splice(chipIndex, 1);
    }
  }

  addChip(event: MatChipInputEvent | null, sectionIndex: number, questionIndex: number) {
    const input = event?.input;
    const value = (event?.value || '').trim();

    if (value) {
      const question = this.sections[sectionIndex].questions[questionIndex];
      if (!question.chips) {
        question.chips = [];
      }
      if (!question.chips.includes(value)) {
        question.chips.push(value);
      }
    }

    if (input) {
      input.value = '';
    }
    this.chipInput.setValue('');
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
    console.log('Section saved:', this.sections[this.selectedStep]);
  }

  validateNumber(event: Event): void {
    const input = event.target as HTMLInputElement;
    const value = input.value;
    if (!/^\d*$/.test(value)) {
      input.value = value.replace(/[^\d]/g, '');
    }
    const question = this.sections[this.selectedStep].questions.find(q => q.numericValue !== undefined);
    if (question) {
      question.numericValue = parseFloat(input.value) || undefined;
    }
  }

  addOption(sectionIndex: number, questionIndex: number) {
    const question = this.sections[sectionIndex].questions[questionIndex];
    if (!question.dropdownOptions) {
      question.dropdownOptions = [];
    }
    if (this.newOption) {
      question.dropdownOptions.push(this.newOption.trim());
      this.newOption = '';
    }
  }

  deleteOption(sectionIndex: number, questionIndex: number, optionIndex: number) {
    const question = this.sections[sectionIndex].questions[questionIndex];
    if (question.dropdownOptions && question.dropdownOptions.length > optionIndex) {
      question.dropdownOptions.splice(optionIndex, 1);
    }
  }
}