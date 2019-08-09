import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {

  private authors = ['auther1', 'author2', 'author3'];

  constructor() { }

  getAuthors() {
    return this.authors;
  }
}
