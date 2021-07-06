import { TestBed } from '@angular/core/testing';

import { MobilesDataService } from './mobiles-data.service';

describe('MobilesDataService', () => {
  let service: MobilesDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MobilesDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
