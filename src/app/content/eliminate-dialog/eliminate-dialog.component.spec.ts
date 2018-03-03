import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {EliminateDialogComponent} from './eliminate-dialog.component';

describe('EliminateDialogComponent', () => {
  let component: EliminateDialogComponent;
  let fixture: ComponentFixture<EliminateDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EliminateDialogComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminateDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
