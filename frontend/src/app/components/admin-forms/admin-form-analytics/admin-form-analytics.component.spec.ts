import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminFormAnalyticsComponent } from './admin-form-analytics.component';

describe('AdminFormAnalyticsComponent', () => {
  let component: AdminFormAnalyticsComponent;
  let fixture: ComponentFixture<AdminFormAnalyticsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminFormAnalyticsComponent]
    });
    fixture = TestBed.createComponent(AdminFormAnalyticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
