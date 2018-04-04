import { TestBed, inject } from '@angular/core/testing';

import { AddFormService } from './add-form.service';

describe('AddFormService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddFormService]
    });
  });

  it('should be created', inject([AddFormService], (service: AddFormService) => {
    expect(service).toBeTruthy();
  }));
});
