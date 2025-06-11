import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicantDetatilsComponent } from './applicant-detatils.component';

describe('ApplicantDetatilsComponent', () => {
  let component: ApplicantDetatilsComponent;
  let fixture: ComponentFixture<ApplicantDetatilsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApplicantDetatilsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApplicantDetatilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
