import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CuponComponent } from './cupon.component';

describe('CuponComponent', () => {
  let component: CuponComponent;
  let fixture: ComponentFixture<CuponComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuponComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuponComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
