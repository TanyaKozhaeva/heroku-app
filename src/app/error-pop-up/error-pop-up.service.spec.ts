import { TestBed, inject } from '@angular/core/testing';

import { ErrorPopUpService } from './error-pop-up.service';

describe('ErrorPopUpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ErrorPopUpService]
    });
  });

  it('should be created', inject([ErrorPopUpService], (service: ErrorPopUpService) => {
    expect(service).toBeTruthy();
  }));
});
