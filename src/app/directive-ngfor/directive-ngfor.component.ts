import { Component, OnInit } from '@angular/core';


interface CourseObject {
  id: number;
  name: string;
}

@Component({
  selector: 'app-directive-ngfor',
  templateUrl: './directive-ngfor.component.html',
  styleUrls: ['./directive-ngfor.component.css']
})


export class DirectiveNgforComponent {
  courses: object[] = [];

  addCourse() {
    this.courses.push({
      id: this.courses.length + 1,
      name: `course${this.courses.length + 1}`,
    });
  }

  loadCourses() {
    this.courses = [
      { id: 1, name: 'course1' },
      { id: 2, name: 'course2' },
      { id: 3, name: 'course3' }
    ];
  }

  trackCourse(index, course: CourseObject): number {
    return course ? course.id : undefined;
  }

  removeCourse(name) {
   const index = this.courses.indexOf(name);
   this.courses.splice(index, 1);
  }
}
