import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private activeTheme: string = 'light';
  private color: string = 'default'; // Property to store selected color

  constructor() {
    this.activeTheme = localStorage.getItem('theme') || 'light';
    this.color = localStorage.getItem('color') || 'default';
    this.applyTheme(this.activeTheme);
    this.applyColor(this.color);
  }

  setTheme(theme: string) {
    this.activeTheme = theme;
    localStorage.setItem('theme', theme);
    this.applyTheme(theme);
  }

  getTheme(): string {
    return this.activeTheme;
  }

  setColor(color: string) {
    this.color = color;
    localStorage.setItem('color', color);
    this.applyColor(color);
  }

  getColor(): string {
    return this.color;
  }

  private applyTheme(theme: string) {
    document.body.classList.remove('light-theme', 'dark-theme');
    document.body.classList.add(`${theme}-theme`);
  }

  private applyColor(color: string) {
    document.body.classList.remove('color-option1', 'color-option2', 'color-option3', 'color-option4', 'color-option5', 'color-option6', 'color-option7');
    if (color) {
      document.body.classList.add(`color-${color}`);
    }
  }
}
