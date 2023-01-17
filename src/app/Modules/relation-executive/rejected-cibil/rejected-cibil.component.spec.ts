import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RejectedCibilComponent } from './rejected-cibil.component';

describe('RejectedCibilComponent', () => {
  let component: RejectedCibilComponent;
  let fixture: ComponentFixture<RejectedCibilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RejectedCibilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RejectedCibilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
