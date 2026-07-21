import { TestBed } from '@angular/core/testing';

import { UserRoleGardService } from './user-role-gard.service';

describe('UserRoleGardService', () => {
  let service: UserRoleGardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserRoleGardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
