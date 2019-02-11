import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CanjearcodigoPage } from './canjearcodigo.page';

describe('CanjearcodigoPage', () => {
  let component: CanjearcodigoPage;
  let fixture: ComponentFixture<CanjearcodigoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CanjearcodigoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CanjearcodigoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
