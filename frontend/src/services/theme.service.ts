import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private activeTheme: string = 'light';
  private colorPalette: string = 'default'; // Property to store selected color palette

  constructor() {
    this.activeTheme = localStorage.getItem('theme') || 'light';
    this.colorPalette = localStorage.getItem('colorPalette') || 'default';
    this.applyTheme(this.activeTheme);
    this.applyColorPalette(this.colorPalette);
  }

  setTheme(theme: string) {
    this.activeTheme = theme;
    localStorage.setItem('theme', theme);
    this.applyTheme(theme);
  }

  getTheme(): string {
    return this.activeTheme;
  }

  setColorPalette(colorPalette: string) {
    this.colorPalette = colorPalette;
    localStorage.setItem('colorPalette', colorPalette);
    this.applyColorPalette(colorPalette);
  }

  getColorPalette(): string {
    return this.colorPalette;
  }

  private applyTheme(theme: string) {
    document.body.classList.remove('light-theme', 'dark-theme');
    document.body.classList.add(`${theme}-theme`);
  }

  private applyColorPalette(colorPalette: string) {
    const palettes = [
      'red-palette', 'green-palette', 'blue-palette', 
      'yellow-palette', 'cyan-palette', 'magenta-palette', 
      'orange-palette'
    ];
    
    palettes.forEach(palette => document.body.classList.remove(palette));
    
    if (colorPalette !== 'default') {
      document.body.classList.add(`${colorPalette}-palette`);
    }
  }
}
