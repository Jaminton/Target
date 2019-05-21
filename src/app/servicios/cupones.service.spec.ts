import { TestBed } from '@angular/core/testing';

import { CuponesService } from './cupones.service';

describe('CuponesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CuponesService = TestBed.get(CuponesService);
    expect(service).toBeTruthy();
  });
});
