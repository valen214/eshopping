import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClickAwayComponent } from './click-away.component';

describe('ClickAwayComponent', () => {
  let component: ClickAwayComponent;
  let fixture: ComponentFixture<ClickAwayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClickAwayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClickAwayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
