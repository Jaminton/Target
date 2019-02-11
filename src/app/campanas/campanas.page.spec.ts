import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampanasPage } from './campanas.page';

describe('CampanasPage', () => {
  let component: CampanasPage;
  let fixture: ComponentFixture<CampanasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampanasPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampanasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
