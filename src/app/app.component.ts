import { Component } from '@angular/core';

@Component({
  selector: 'app-root', // tag to render this component
  templateUrl: './app.component.html', // in this case this is an external template
  styleUrls: ['./app.component.css'] // this is a css file
})
export class AppComponent {
  title = 'Angular App';
  // constructor(title: string = 'Angular App' ) {
  //   this.title = title;
  // }
}
