import { Injectable } from '@angular/core';
import { TileGame } from '../models/tilegame.model';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {

  game: TileGame;

  constructor() {
    //this.game = localStorage.getItem('birthday-2020-saved');
    this.game = {
      size: 4,
    };
  }
}
