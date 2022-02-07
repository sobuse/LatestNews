import { TestBed } from '@angular/core/testing';

import { LatestNewsApiService } from './latest-news-api.service';

describe('LatestNewsApiService', () => {
  let service: LatestNewsApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LatestNewsApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
