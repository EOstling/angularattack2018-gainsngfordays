import { TestBed, inject } from '@angular/core/testing';

import { WODService } from './wod.service';

describe('WODService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WODService]
    });
  });

  it('should be created', inject([WODService], (service: WODService) => {
    expect(service).toBeTruthy();
  }));
});
