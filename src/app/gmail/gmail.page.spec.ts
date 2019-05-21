import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GmailPage } from './gmail.page';

describe('GmailPage', () => {
  let component: GmailPage;
  let fixture: ComponentFixture<GmailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GmailPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GmailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
