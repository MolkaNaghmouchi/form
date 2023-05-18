import { TestBed } from '@angular/core/testing';

import { ProdServicesService } from './prod-services.service';

describe('ProdServicesService', () => {
  let service: ProdServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProdServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
