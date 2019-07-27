import { CourseComponent } from './course/course.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/course.component';
import { CoursesService } from './courses.service';


// ngModule is another decorator function
// with this we convert a simple ts class
// to modules from angular point of view;
@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent // cli genereated component automatiically added the component
                    // now angular knows about this component
                    // and we can use its selector in app component html template
  ],
  imports: [
    BrowserModule
  ], // need to add DI for it to work
  providers: [
    CoursesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
