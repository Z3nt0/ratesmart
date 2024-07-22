import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { SidenavComponent } from './sidenav.component';
import { SidenavService } from './sidenav.service';
import { of } from 'rxjs';

describe('SidenavComponent', () => {
  let component: SidenavComponent;
  let fixture: ComponentFixture<SidenavComponent>;
  let sidenavService: SidenavService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SidenavComponent],
      imports: [MatSidenavModule, MatListModule],
      providers: [
        {
          provide: SidenavService,
          useValue: {
            setSidenav: jasmine.createSpy('setSidenav'),
            open: jasmine.createSpy('open'),
            close: jasmine.createSpy('close'),
            toggle: jasmine.createSpy('toggle'),
          },
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidenavComponent);
    component = fixture.componentInstance;
    sidenavService = TestBed.inject(SidenavService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
