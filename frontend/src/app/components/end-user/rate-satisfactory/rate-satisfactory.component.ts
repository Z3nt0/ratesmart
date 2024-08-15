import { Component } from '@angular/core';
import { SidenavService } from '../../shared/sidenav/sidenav.service'; 
import { ThemeService } from '../../../../services/theme.service';

@Component({
  selector: 'app-rate-satisfactory',
  templateUrl: './rate-satisfactory.component.html',
  styleUrls: ['./rate-satisfactory.component.scss']
})
export class RateSatisfactoryComponent {

  settings: any = {
    theme: 'light'
  };

  color: string = 'default'; // Add this line to define the color property

  constructor(
    private sidenavService: SidenavService,
    private themeService: ThemeService) {}

  ngOnInit(): void {
    // Get the current theme from the ThemeService
    this.settings.theme = this.themeService.getTheme();
    // You can set the color property here if needed
  }

  openSidenav() {
    this.sidenavService.toggle();
  }
  
  chips: string[] = ['One fish', 'Two fish', 'Accent fish', 'Warn fish'];
  selectedChips: string[] = [];
  options: string[] = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];
  selectedOptions: string[] = [];
  
  
  rating: number | null = null; 
  maxRating: number = 5;

  
  numericValue: number | null = null;
  isInvalidNumber: boolean = false;

  
  selectedDropdownValue: string | null = null;
  dropdownOptions: string[] = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];

  
  numbers: number[] = Array.from({ length: 5 }, (_, i) => i + 1); 
  selectedNumber: number | null = null;

  
  setRating(value: number) {
    this.rating = this.rating === value ? null : value;
  }

 
  isStarActive(index: number): boolean {
    return this.rating !== null && index < this.rating;
  }

  
  get stars() {
    return Array(this.maxRating).fill(0).map((_, i) => i + 1);
  }

  onSelectionChange(event: any) {
    const chip = event.option.value;
    if (event.option.selected) {
      this.selectedChips.push(chip);
    } else {
      this.selectedChips = this.selectedChips.filter(item => item !== chip);
    }
    console.log('Selected chips:', this.selectedChips);
  }

  
  onOptionChange(option: string, event: any) {
    if (event.checked) {
      this.selectedOptions.push(option);
    } else {
      this.selectedOptions = this.selectedOptions.filter(item => item !== option);
    }
    console.log('Selected options:', this.selectedOptions);
  }


  onInputChange(event: any) {
    const inputValue = event.target.value;
   
    const cleanedValue = inputValue.replace(/[^0-9]/g, '');
    
    this.numericValue = cleanedValue ? Number(cleanedValue) : null;
   
    this.isInvalidNumber = this.numericValue === null || isNaN(this.numericValue) || this.numericValue < 0;
 
    event.target.value = cleanedValue;
  }

 
  selectNumber(number: number) {
    this.selectedNumber = this.selectedNumber === number ? null : number;
  }


  getCircleClass(number: number): string {
    if (this.selectedNumber !== null && number <= this.selectedNumber) {
      return `circle selected-${number}`;
    }
    return 'circle';
  }
}
