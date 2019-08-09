import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.css']
})
export class InterpolationComponent implements OnInit {
  title = 'My Title';
  name = 'Usman';
  currentUrl = window.location.href;
  x: string;
  constructor() {
   }
  setX(v: string) {
    this.x = v;
  }
  getX(): string {
    return this.x;
  }

  greeting() {
    return 'Hello ' + this.name;
  }
  ngOnInit() {
  }

}
