import { ComponentChangedEvent } from './reusable-component/reusable-component.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root', // tag to render this component
  templateUrl: './app.component.html', // in this case this is an external template
  styleUrls: ['./app.component.css'] // this is a css file
})
export class AppComponent {
  tweet = {
    body: 'This is a tweet content...',
    isLiked: false,
    likeCount: 23123
  };
  title = 'Angular App';
  // onClick() {
  //   this.isLiked = !this.isLiked;
  // }

  onComponentChange($event: ComponentChangedEvent) {
    console.log('Component Changed', $event.newValue);
  }
}
