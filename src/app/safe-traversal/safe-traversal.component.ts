import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-safe-traversal',
  templateUrl: './safe-traversal.component.html',
  styleUrls: ['./safe-traversal.component.css']
})
export class SafeTraversalComponent {
  task = {
    title: 'Review application',
    assignee: {
      name: 'John Smith',
      position: null,
    }
  };

  constructor() {
    setTimeout(() => {
      this.task.assignee.position = 'developer';
    }, 2000);
  }
}
