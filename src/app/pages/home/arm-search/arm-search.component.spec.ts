import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArmSearchComponent } from './arm-search.component';

describe('ArmSearchComponent', () => {
  let component: ArmSearchComponent;
  let fixture: ComponentFixture<ArmSearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArmSearchComponent]
    });
    fixture = TestBed.createComponent(ArmSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
