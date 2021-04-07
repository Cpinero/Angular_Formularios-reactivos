import { TestBed } from '@angular/core/testing';

import { RutasResolver } from './rutas.resolver';

describe('RutasResolver', () => {
  let resolver: RutasResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(RutasResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
