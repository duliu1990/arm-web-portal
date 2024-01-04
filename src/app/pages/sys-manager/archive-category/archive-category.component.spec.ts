import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchiveCategoryComponent } from './archive-category.component';

describe('ArchiveCategoryComponent', () => {
  let component: ArchiveCategoryComponent;
  let fixture: ComponentFixture<ArchiveCategoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArchiveCategoryComponent]
    });
    fixture = TestBed.createComponent(ArchiveCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
