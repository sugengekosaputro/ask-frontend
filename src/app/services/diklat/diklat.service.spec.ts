import { TestBed } from '@angular/core/testing';

import { DiklatService } from './diklat.service';

describe('DiklatService', () => {
  let service: DiklatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DiklatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
