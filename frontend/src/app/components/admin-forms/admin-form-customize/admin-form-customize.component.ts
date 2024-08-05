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
  showStepper = true;
  sections: { title: string; questions: { questionText: string; responseType: string }[] }[] = [
    {
      title: 'Section 1',
      questions: [
        { questionText: '', responseType: ' ' },
      ]
    }
  ];

  constructor(private sidenavService: SidenavService, private _formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });

    // Show the stepper if there are sections
    this.showStepper = this.sections.length > 0;
  }

  openSidenav() {
    this.sidenavService.toggle();
  }

  addSection() {
    this.sections.push({
      title: `Section ${this.sections.length + 1}`,
      questions: [{ questionText: '', responseType: '' }]
    });
    this.showStepper = true;
  }

  addQuestion(sectionIndex: number) {
    this.sections[sectionIndex].questions.push({
      questionText: '',
      responseType: ''
    });
  }
}
