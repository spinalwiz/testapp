/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GameModesService } from './gamemodes.service';

describe('Service: Gamemodes', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GameModesService]
    });
  });

  it('should ...', inject([GameModesService], (service: GameModesService) => {
    expect(service).toBeTruthy();
  }));
});
