import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-reusable-component',
  templateUrl: './reusable-component.component.html',
  styleUrls: ['./reusable-component.component.css'],
  // inputs: ['isLiked']; // give compilation error.
  // it is not a better approavh as refactoring the application will be difficult
  // as we will need to change all the feilds in the component altogether.
})


export class ReusableComponentComponent implements OnInit {
  // @Input() private isLiked: boolean;
  // for aliasing the name of the input feild
  // that we are going to bind with html markup.
  // we must pass that string to input arguments, this
  // is done to avoid camel casing in out html markeup as JS and TS dont ssupport kebab casing.
  // tslint:disable-next-line: no-input-rename
  @Input('is-liked') isLiked: boolean;
  // tslint:disable-next-line: no-output-native
  // tslint:disable-next-line: no-output-rename
  @Output('component-clicked') change = new EventEmitter();
  constructor() {
  }

  ngOnInit() {
  }

  onClick() {
    this.isLiked = !this.isLiked;
    // we can also pass objects to our events,
    // but the best approach to define the nature and propterties
    // of that object we must create an interface,
    // so we avoid any errors of a variable being undefined.
    // in the last we can see that we have defined and interface.
    // this will be imported in the parent componnent of this reusable component
    // for type anotations.
    this.change.emit({
      newValue: this.isLiked,
    });
  }

}

export interface ComponentChangedEvent {
  newValue: boolean;
}
