import { TestBed } from '@angular/core/testing';
import { JwtInterceptorService } from 'src/app/services/jwt-interceptor.service';

describe('JwtInterceptorService', () => {
  let service: JwtInterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JwtInterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
