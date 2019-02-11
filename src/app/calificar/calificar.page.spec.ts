import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalificarPage } from './calificar.page';

describe('CalificarPage', () => {
  let component: CalificarPage;
  let fixture: ComponentFixture<CalificarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalificarPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalificarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
