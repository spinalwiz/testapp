/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HighscoresService } from './highscores.service';

describe('Service: Highscores', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HighscoresService]
    });
  });

  it('should ...', inject([HighscoresService], (service: HighscoresService) => {
    expect(service).toBeTruthy();
  }));
});
