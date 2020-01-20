import { TestBed } from '@angular/core/testing';

import { MarioService } from './mario.service';

describe('MarioService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MarioService = TestBed.get(MarioService);
    expect(service).toBeTruthy();
  });
});
