import { CoursesService } from './../services/courses.service';
import { Component } from '@angular/core';

@Component({
    selector: 'app-course-form',
    template: '<h1>Form for adding course {{title}}</h1>',
    templateUrl: './course-form.component.html' // has more precedencec than template
})

export class CourseFormComponent {
    title = 'Course Form';
    // courses = ['course1', 'course2', 'course3'];
    courses: Array<string>;

    constructor(service: CoursesService) {
        // const service = new CoursesService();
        this.courses = service.getCourses();
    }
}
