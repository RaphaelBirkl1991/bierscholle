import { TestBed } from '@angular/core/testing';

import { FahrerService } from './fahrer.service';

describe('FahrerService', () => {
  let service: FahrerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FahrerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
