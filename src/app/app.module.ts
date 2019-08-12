import { CourseComponent } from './course/course.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/course.component';
import { CoursesService } from './services/courses.service';
import { HeaderComponent } from './header/header.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { PropBindingComponent } from './prop-binding/prop-binding.component';
import { CourseFormComponent } from './course-form/course-form.component';
import { CourseReviewComponent } from './course-review/course-review.component';
import { AuthorFormComponent } from './author-form/author-form.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { AttrBindingComponent } from './attr-binding/attr-binding.component';
import { ClassBindingComponent } from './class-binding/class-binding.component';
import { StyleBindingComponent } from './style-binding/style-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { EventFilteringComponent } from './event-filtering/event-filtering.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { PipeComponent } from './pipe/pipe.component';
import { CustomPipeComponent } from './custom-pipe/custom-pipe.component';
import { SummaryPipe } from './pipes/summary.pipe';
import { ExerciseIconsComponent } from './exercise-icons/exercise-icons.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReusableComponentComponent } from './reusable-component/reusable-component.component';
import { NgContentComponent } from './ng-content/ng-content.component';
import { NgContainerComponent } from './ng-container/ng-container.component';
import { ExerciseComponentComponent } from './exercise-component/exercise-component.component';
import { DirectiveNgifComponent } from './directive-ngif/directive-ngif.component';
import { DirectiveNgswitchComponent } from './directive-ngswitch/directive-ngswitch.component';
import { DirectiveNgforComponent } from './directive-ngfor/directive-ngfor.component';

// ngModule is another decorator function
// with this we convert a simple ts class
// to modules from angular point of view;
@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseFormComponent,
    CourseComponent,
    HeaderComponent,
    InterpolationComponent,
    PropBindingComponent,
    CourseReviewComponent,
    AuthorFormComponent,
    DataBindingComponent,
    AttrBindingComponent,
    ClassBindingComponent,
    StyleBindingComponent,
    EventBindingComponent,
    EventFilteringComponent,
    TwoWayBindingComponent,
    PipeComponent,
    CustomPipeComponent,
    SummaryPipe,
    ExerciseIconsComponent,
    ReusableComponentComponent,
    NgContentComponent,
    NgContainerComponent,
    ExerciseComponentComponent,
    DirectiveNgifComponent,
    DirectiveNgswitchComponent,
    DirectiveNgforComponent,
     // cli genereated component automatiically added the component
                    // now angular knows about this component
                    // and we can use its selector in app component html template
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    FormsModule
  ], // need to add DI for it to work
  providers: [
    CoursesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
