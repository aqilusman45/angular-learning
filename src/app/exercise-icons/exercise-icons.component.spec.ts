import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciseIconsComponent } from './exercise-icons.component';

describe('ExerciseIconsComponent', () => {
  let component: ExerciseIconsComponent;
  let fixture: ComponentFixture<ExerciseIconsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExerciseIconsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExerciseIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
