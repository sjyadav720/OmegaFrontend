import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowCibilVerifyComponent } from './show-cibil-verify.component';

describe('ShowCibilVerifyComponent', () => {
  let component: ShowCibilVerifyComponent;
  let fixture: ComponentFixture<ShowCibilVerifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowCibilVerifyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowCibilVerifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
