import { TestBed } from '@angular/core/testing';

import { AnimalDataAccessService } from './animal-data-access.service';

describe('AnimalDataAccessService', () => {
  let service: AnimalDataAccessService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnimalDataAccessService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
