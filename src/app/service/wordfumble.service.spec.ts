import { TestBed } from '@angular/core/testing';

import { WordfumbleService } from './wordfumble.service';

describe('WordfumbleService', () => {
  let service: WordfumbleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WordfumbleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
