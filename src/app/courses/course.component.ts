// to start working with angular
// we must first create a component
// a component is a .ts file
// with naming convention "<component name>-<component name>.component.ts"
// following is the code for our course component

// first we will need to import angular/core
import { Component } from '@angular/core';

// @component is a typedecorator that
// adds extra meta data about the component
// below is the decorator function
// we will add properties to tell how this component works
@Component({
  selector: 'app-courses', // this is a css selector. to select tags we use name of the tag
  // eg <course> so selector will be "app-course"(app prefix is mandatory)
  // for element with class eg: <div class="my-class">, its selector would be ".my-class"
  // for element with id eg: <div id="my-id"> selector would be "#my-id"


    // this is the html that we want to render for this component
    // here we have used qoutes '' to define template, but we will change it to back ticks so
    // that miltline html can rendered
    // with back ticks we use template literals
  template:
  // intro to directives
  // ng uses directives to iterate over data structure such as arrays and render data to DOM
  // there are several other directives as well such as one for conditional rendering
    `<h2>{{ "Interpolation: " + getTitle() }}</h2>
    <h2>{{"Property rendering: " + title}}</h2>
    <ul>
       <li *ngFor="let course of courses">
           {{course}}
       </li>
    </ul>
    `
})
export class CoursesComponent {
  title = 'List of Courses';
  courses = ['course1', 'course2', 'course3'];
  getTitle(): string {
    return this.title;
  }
}
