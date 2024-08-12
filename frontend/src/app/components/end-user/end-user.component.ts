import { Component } from '@angular/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';

@Component({
  selector: 'app-end-user',
  templateUrl: './end-user.component.html',
  styleUrls: ['./end-user.component.scss'],
  standalone: true,
  imports: [MatCardModule, MatDatepickerModule, MatNativeDateModule],
})
export class EndUserComponent {
  selected: Date | null = null; // Initialize with null
}

