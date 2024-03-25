import { Component } from '@angular/core';

@Component({
  selector: 'display-details',
  templateUrl: './display-details.component.html',
  styleUrl: './display-details.component.css',
  styles: [`
    .textcolor {
      color: white;
    }
  `]
})
export class DisplayDetailsComponent {
  clicks = [];
  counter = 0;
  showSecret = false;

  constructor() {
    console.log(this.clicks);
  }

  onChange() {
    this.counter += 1;
    this.clicks.push(this.counter);
  }
  getStatus() {
    return this.counter%2 !== 0 ? 'block' : 'none';
  }

  getColor() {
    return this.counter >= 5 ? 'skyblue' : 'white';
  }

}
