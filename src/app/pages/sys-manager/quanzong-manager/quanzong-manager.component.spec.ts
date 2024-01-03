import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuanzongManagerComponent } from './quanzong-manager.component';

describe('QuanzongManagerComponent', () => {
  let component: QuanzongManagerComponent;
  let fixture: ComponentFixture<QuanzongManagerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuanzongManagerComponent]
    });
    fixture = TestBed.createComponent(QuanzongManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
