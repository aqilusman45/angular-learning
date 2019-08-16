import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-ngstyle',
  templateUrl: './directive-ngstyle.component.html',
  styleUrls: ['./directive-ngstyle.component.css']
})
export class DirectiveNgstyleComponent {
  canSave = true;

  onClick() {
    this.canSave = !this.canSave;
  }
}
