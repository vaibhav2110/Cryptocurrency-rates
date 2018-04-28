import { TestBed, inject } from '@angular/core/testing';

import { CoinServiceService } from './coin-service.service';

describe('CoinServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CoinServiceService]
    });
  });

  it('should be created', inject([CoinServiceService], (service: CoinServiceService) => {
    expect(service).toBeTruthy();
  }));
});
