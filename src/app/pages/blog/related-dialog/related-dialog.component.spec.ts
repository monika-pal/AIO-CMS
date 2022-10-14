import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatedDialogComponent } from './related-dialog.component';

describe('RelatedDialogComponent', () => {
  let component: RelatedDialogComponent;
  let fixture: ComponentFixture<RelatedDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RelatedDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RelatedDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
