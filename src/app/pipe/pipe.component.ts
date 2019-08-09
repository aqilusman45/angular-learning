import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit {
  course = {
    name: 'Angular 8',
    price: 23.444,
    students: 213123,
    rating: 4.293,
    date: new Date(),
    percentage: 22.2,
  };
  constructor() { }

  ngOnInit() {
  }

}
