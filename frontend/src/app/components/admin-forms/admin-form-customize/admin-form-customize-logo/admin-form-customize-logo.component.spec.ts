import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminFormCustomizeLogoComponent } from './admin-form-customize-logo.component';

describe('AdminFormCustomizeLogoComponent', () => {
  let component: AdminFormCustomizeLogoComponent;
  let fixture: ComponentFixture<AdminFormCustomizeLogoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminFormCustomizeLogoComponent]
    });
    fixture = TestBed.createComponent(AdminFormCustomizeLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
