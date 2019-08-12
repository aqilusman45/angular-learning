import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciseComponentComponent } from './exercise-component.component';

describe('ExerciseComponentComponent', () => {
  let component: ExerciseComponentComponent;
  let fixture: ComponentFixture<ExerciseComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExerciseComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExerciseComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
