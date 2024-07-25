import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminFormCustomizeComponent } from './admin-form-customize.component';

describe('AdminFormCustomizeComponent', () => {
  let component: AdminFormCustomizeComponent;
  let fixture: ComponentFixture<AdminFormCustomizeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminFormCustomizeComponent]
    });
    fixture = TestBed.createComponent(AdminFormCustomizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
