import { TestBed, inject } from '@angular/core/testing';

import { ImtServiceService } from './imt-service.service';

describe('ImtServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ImtServiceService]
    });
  });

  it('should be created', inject([ImtServiceService], (service: ImtServiceService) => {
    expect(service).toBeTruthy();
  }));
});
