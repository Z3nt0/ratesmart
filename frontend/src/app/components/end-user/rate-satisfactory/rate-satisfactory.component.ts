import { Component } from '@angular/core';

@Component({
  selector: 'app-rate-satisfactory',
  templateUrl: './rate-satisfactory.component.html',
  styleUrls: ['./rate-satisfactory.component.scss']
})
export class RateSatisfactoryComponent {
  chips: string[] = ['One fish', 'Two fish', 'Accent fish', 'Warn fish'];
  selectedChips: string[] = [];
  options: string[] = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];
  selectedOptions: string[] = []; 
  rating: number = 0;
  maxRating: number = 5;


  setRating(value: number) {
    this.rating = value;
  }

  isStarActive(index: number): boolean {
    return index < this.rating;
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
}
