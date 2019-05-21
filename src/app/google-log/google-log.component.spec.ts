import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleLogComponent } from './google-log.component';

describe('GoogleLogComponent', () => {
  let component: GoogleLogComponent;
  let fixture: ComponentFixture<GoogleLogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoogleLogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoogleLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
