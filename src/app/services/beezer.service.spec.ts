import { TestBed } from '@angular/core/testing';

import { BeezerService } from './beezer.service';

describe('BeezerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BeezerService = TestBed.get(BeezerService);
    expect(service).toBeTruthy();
  });
});
