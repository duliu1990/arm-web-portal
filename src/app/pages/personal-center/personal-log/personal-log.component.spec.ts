import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalLogComponent } from './personal-log.component';

describe('PersonalLogComponent', () => {
  let component: PersonalLogComponent;
  let fixture: ComponentFixture<PersonalLogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PersonalLogComponent]
    });
    fixture = TestBed.createComponent(PersonalLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
