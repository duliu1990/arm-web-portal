import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalSysMsgComponent } from './personal-sys-msg.component';

describe('PersonalSysMsgComponent', () => {
  let component: PersonalSysMsgComponent;
  let fixture: ComponentFixture<PersonalSysMsgComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PersonalSysMsgComponent]
    });
    fixture = TestBed.createComponent(PersonalSysMsgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
