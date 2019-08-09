import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-binding',
  templateUrl: './two-way-binding.component.html',
  styleUrls: ['./two-way-binding.component.css']
})
export class TwoWayBindingComponent implements OnInit {
  // As we have already binded our html with two way binding for email
  // setting a property here will initialize and view it there as well
  email = 'me@example.com';
  // now this wont work rigt away, two way binding in angular is not imported by default
  // as importing it by default will make the app heavy on the memory.
  // so  we are going to import it in our app module.
  constructor() { }

  ngOnInit() {
  }

  onKeyUp() {
    console.log(this.email);
  }
}
