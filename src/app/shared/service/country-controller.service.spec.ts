import { TestBed } from '@angular/core/testing';

import { CountryControllerService } from './country-controller.service';

describe('CountryControllerService', () => {
  let service: CountryControllerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CountryControllerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
