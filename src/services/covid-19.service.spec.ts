import { TestBed } from '@angular/core/testing';

import { Covid19Service } from './covid-19.service';

describe('Covid19Service', () => {
  let service: Covid19Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Covid19Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
