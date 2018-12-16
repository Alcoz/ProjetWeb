import { TestBed } from '@angular/core/testing';

import { SharewoodService } from './sharewood.service';

describe('SharewoodService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SharewoodService = TestBed.get(SharewoodService);
    expect(service).toBeTruthy();
  });
});
