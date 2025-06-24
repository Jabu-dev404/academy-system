import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaptureLessonComponent } from './capture-lesson.component';

describe('CaptureLessonComponent', () => {
  let component: CaptureLessonComponent;
  let fixture: ComponentFixture<CaptureLessonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CaptureLessonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaptureLessonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
