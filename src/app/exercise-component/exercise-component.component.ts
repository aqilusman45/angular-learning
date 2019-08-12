import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-exercise-component',
  templateUrl: './exercise-component.component.html',
  styleUrls: ['./exercise-component.component.css']
})
export class ExerciseComponentComponent {
  icon = faHeart;

  // tslint:disable-next-line: no-input-rename
  @Input('like-count') likeCount = 0;
  // tslint:disable-next-line: no-input-rename
  @Input('is-liked') isLiked: boolean;
  // tslint:disable-next-line: no-output-native
  @Output() change = new EventEmitter();

  onClick() {
    this.likeCount += this.isLiked ? 1 : -1;
    this.isLiked = !this.isLiked;
    this.change.emit({
      isLiked: this.isLiked
    });
  }
}

export interface ExerciseComponentComponentChangeData {
  isLiked: boolean;
}
