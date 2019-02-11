import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetonesPage } from './tarjetones.page';

describe('TarjetonesPage', () => {
  let component: TarjetonesPage;
  let fixture: ComponentFixture<TarjetonesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TarjetonesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TarjetonesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
