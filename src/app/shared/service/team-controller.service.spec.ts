import { TestBed } from '@angular/core/testing';

import { TeamControllerService } from './team-controller.service';

describe('TeamControllerService', () => {
  let service: TeamControllerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TeamControllerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
