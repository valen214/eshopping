import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmsTemplateComponent } from './cms-template.component';

describe('CmsTemplateComponent', () => {
  let component: CmsTemplateComponent;
  let fixture: ComponentFixture<CmsTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmsTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmsTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
