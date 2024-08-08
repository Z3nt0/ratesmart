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
      title: 'Start',
      questions: [
        { questionText: '', responseType: '' }
      ]
    }
  ];

  sectionFormGroups: FormGroup[] = [];
  selectedStep: number = 0;

  constructor(private sidenavService: SidenavService, private _formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });

    this.updateFormGroups();
  }

  openSidenav() {
    this.sidenavService.toggle();
  }

  addSection() {
    this.sections.push({
      title: `Step #${this.sections.length + 1}`,
      questions: [{ questionText: '', responseType: '' }]
    });
    this.updateFormGroups();
  }

  addQuestion(sectionIndex: number) {
    this.sections[sectionIndex].questions.push({
      questionText: '',
      responseType: ''
    });
  }

  onStepChange(event: any) {
    this.selectedStep = event.selectedIndex;
  }

  private updateFormGroups() {
    this.sectionFormGroups = this.sections.map(() => this._formBuilder.group({
      title: ['', Validators.required],
      questions: this._formBuilder.array([])
    }));
  }
}