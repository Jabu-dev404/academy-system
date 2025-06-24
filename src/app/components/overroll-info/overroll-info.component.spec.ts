import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverrollInfoComponent } from './overroll-info.component';

describe('OverrollInfoComponent', () => {
  let component: OverrollInfoComponent;
  let fixture: ComponentFixture<OverrollInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OverrollInfoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OverrollInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
