import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PqrsPage } from './pqrs.page';

describe('PqrsPage', () => {
  let component: PqrsPage;
  let fixture: ComponentFixture<PqrsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PqrsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PqrsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
