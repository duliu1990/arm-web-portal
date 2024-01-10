import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchiveDataComponent } from './archive-data.component';

describe('ArchiveDataComponent', () => {
  let component: ArchiveDataComponent;
  let fixture: ComponentFixture<ArchiveDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArchiveDataComponent]
    });
    fixture = TestBed.createComponent(ArchiveDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
