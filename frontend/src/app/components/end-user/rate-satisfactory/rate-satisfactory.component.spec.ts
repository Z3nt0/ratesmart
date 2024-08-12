import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RateSatisfactoryComponent } from './rate-satisfactory.component';

describe('RateSatisfactoryComponent', () => {
  let component: RateSatisfactoryComponent;
  let fixture: ComponentFixture<RateSatisfactoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RateSatisfactoryComponent]
    });
    fixture = TestBed.createComponent(RateSatisfactoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
