import { TestBed } from '@angular/core/testing';

import { LeagueControllerService } from './league-controller.service';

describe('LeagueControllerService', () => {
  let service: LeagueControllerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LeagueControllerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
