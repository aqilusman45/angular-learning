import { Component, OnInit } from '@angular/core';
import { faThumbsUp, faThumbsDown , IconDefinition } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-exercise-icons',
  templateUrl: './exercise-icons.component.html',
  styleUrls: ['./exercise-icons.component.css']
})
export class ExerciseIconsComponent implements OnInit {
  private isLiked = false;
  private iconActive: IconDefinition = faThumbsUp ;
  private iconInActive: IconDefinition = faThumbsDown ;
  private titleText = '';
  constructor() {}

  ngOnInit() {
  }

  onClick() {
    this.isLiked = !this.isLiked;
  }

  onKeyUp() {
  }
}
