import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSettingsDeleteComponent } from './admin-settings-delete.component';

describe('AdminSettingsDeleteComponent', () => {
  let component: AdminSettingsDeleteComponent;
  let fixture: ComponentFixture<AdminSettingsDeleteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminSettingsDeleteComponent]
    });
    fixture = TestBed.createComponent(AdminSettingsDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
