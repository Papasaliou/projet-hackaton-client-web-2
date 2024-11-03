import { TestBed } from '@angular/core/testing';

import { InnovativememoryService } from './innovativememory.service';

describe('InnovativememoryService', () => {
  let service: InnovativememoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InnovativememoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
