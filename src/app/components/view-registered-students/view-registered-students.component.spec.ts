import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewRegisteredStudentsComponent } from './view-registered-students.component';

describe('ViewRegisteredStudentsComponent', () => {
  let component: ViewRegisteredStudentsComponent;
  let fixture: ComponentFixture<ViewRegisteredStudentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewRegisteredStudentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewRegisteredStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
