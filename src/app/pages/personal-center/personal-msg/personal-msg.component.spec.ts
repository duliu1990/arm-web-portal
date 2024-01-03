import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalMsgComponent } from './personal-msg.component';

describe('PersonalMsgComponent', () => {
  let component: PersonalMsgComponent;
  let fixture: ComponentFixture<PersonalMsgComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PersonalMsgComponent]
    });
    fixture = TestBed.createComponent(PersonalMsgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
