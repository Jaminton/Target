import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CuponesPage } from './cupones.page';

describe('CuponesPage', () => {
  let component: CuponesPage;
  let fixture: ComponentFixture<CuponesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuponesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuponesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
