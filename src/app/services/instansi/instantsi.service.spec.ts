import { TestBed } from '@angular/core/testing';

import { InstantsiService } from './instantsi.service';

describe('InstantsiService', () => {
  let service: InstantsiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InstantsiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
