import { Component } from '@angular/core';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  arroCards = [
    { title: 'Card 1', cols: 2, rows: 1, sText: 'it yo dashboard dawg' },
    { title: 'Bank Account Balance', cols: 1, rows: 1, sText: 'bank balance dank balance amirite' },
    { title: 'Card 3', cols: 1, rows: 2, sText: 'anon long card' },
    { title: 'Card 4', cols: 1, rows: 1, sText: 'anon short card' }
  ];
}
