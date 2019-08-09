import { AuthorsService } from './../authors.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-author-form',
  templateUrl: './author-form.component.html',
  styleUrls: ['./author-form.component.css']
})
export class AuthorFormComponent implements OnInit {
  authors: Array<string>;
  authorCount: number;
  constructor(authorService: AuthorsService) {
      this.authors = authorService.getAuthors();
      this.authorCount = this.authors.length;
   }

  ngOnInit() {
  }

}
