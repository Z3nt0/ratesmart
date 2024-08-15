import { Component, OnInit } from '@angular/core';
import { SidenavService } from '../shared/sidenav/sidenav.service';
import { Router } from '@angular/router';
import { ThemePalette } from '@angular/material/core';
import { ThemeService } from '../../../services/theme.service';

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.scss']
})
export class AdminProfileComponent implements OnInit {
  user = {
    name: '',
    username: '',
    password: ''
  };

  settings: any = {
    theme: 'light'
  };

  color: ThemePalette = 'primary'; 

  constructor(
    private sidenavService: SidenavService,
    private router: Router,
    private themeService: ThemeService 
  ) {}

  ngOnInit(): void {
    
    this.settings.theme = this.themeService.getTheme();
  }

  onSubmit() {
    console.log('User signed up with: ', this.user);
    
  }

  openSidenav() {
    this.sidenavService.toggle();
  }

  changepass() {
    this.router.navigate(['/change-password']);
  }
}
