import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {
  recentForms = [
    { title: 'Form 1' },
    { title: 'Form 2' },
    { title: 'Form 3' }
  ];

  constructor() { }

  ngOnInit(): void {
    // Fetch and initialize data here
  }
}
