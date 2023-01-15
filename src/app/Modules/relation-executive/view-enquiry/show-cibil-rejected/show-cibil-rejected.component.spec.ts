import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowCibilRejectedComponent } from './show-cibil-rejected.component';

describe('ShowCibilRejectedComponent', () => {
  let component: ShowCibilRejectedComponent;
  let fixture: ComponentFixture<ShowCibilRejectedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowCibilRejectedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowCibilRejectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
