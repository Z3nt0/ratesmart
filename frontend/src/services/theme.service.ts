import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private activeTheme: string = 'light';

  constructor() {
    // Initialize the theme based on saved preference or default to light
    this.activeTheme = localStorage.getItem('theme') || 'light';
    this.applyTheme(this.activeTheme);
  }

  setTheme(theme: string) {
    this.activeTheme = theme;
    localStorage.setItem('theme', theme);
    this.applyTheme(theme);
  }

  getTheme(): string {
    return this.activeTheme;
  }

  private applyTheme(theme: string) {
    document.body.classList.remove('light-theme', 'dark-theme');
    document.body.classList.add(`${theme}-theme`);
  }
}
