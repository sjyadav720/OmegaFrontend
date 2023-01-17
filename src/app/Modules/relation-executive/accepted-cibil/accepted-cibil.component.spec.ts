import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceptedCibilComponent } from './accepted-cibil.component';

describe('AcceptedCibilComponent', () => {
  let component: AcceptedCibilComponent;
  let fixture: ComponentFixture<AcceptedCibilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcceptedCibilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcceptedCibilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
