import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalPasswordComponent } from './personal-password.component';

describe('PersonalPasswordComponent', () => {
  let component: PersonalPasswordComponent;
  let fixture: ComponentFixture<PersonalPasswordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PersonalPasswordComponent]
    });
    fixture = TestBed.createComponent(PersonalPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
