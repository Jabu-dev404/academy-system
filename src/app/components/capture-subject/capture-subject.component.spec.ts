import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaptureSubjectComponent } from './capture-subject.component';

describe('CaptureSubjectComponent', () => {
  let component: CaptureSubjectComponent;
  let fixture: ComponentFixture<CaptureSubjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CaptureSubjectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaptureSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
