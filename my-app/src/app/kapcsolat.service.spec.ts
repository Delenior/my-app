import { TestBed } from '@angular/core/testing';

import { KapcsolatService } from './kapcsolat.service';

describe('KapcsolatService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: KapcsolatService = TestBed.get(KapcsolatService);
    expect(service).toBeTruthy();
  });
});
