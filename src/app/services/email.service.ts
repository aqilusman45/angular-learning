import { CoursesService } from './courses.service';
import { Injectable } from '@angular/core';

// Type decorator function
// If your service has a dependency it self
// we need to provide it in our injectable type decorator

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  emailTemplate: string;
  constructor(courseService: CoursesService) {
    const courses = courseService.getCourses();
    this.emailTemplate = `<ul> ${ courses.forEach(element => {
      return `<li>${element}</li>`;
    })}</ul>`;
  }
}
