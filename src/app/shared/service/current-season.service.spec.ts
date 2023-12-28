import { TestBed } from '@angular/core/testing';

import { CurrentSeasonService } from './current-season.service';

describe('CurrentSeasonService', () => {
  let service: CurrentSeasonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CurrentSeasonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
