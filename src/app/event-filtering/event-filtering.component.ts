import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-filtering',
  templateUrl: './event-filtering.component.html',
  styleUrls: ['./event-filtering.component.css']
})
export class EventFilteringComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onKeyUp($event) {
    // if ( $event.keyCode === 13) {
      console.log($event);
    // }
  }
}
