import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  OnClickDiv($e: Event) { // Parent Element Event
    console.log('Div clicked', $e);
  }

  OnClickButton($e: Event) { // Child Element Event
    $e.stopPropagation();
    console.log('Button Clicked', $e);
  }
}
