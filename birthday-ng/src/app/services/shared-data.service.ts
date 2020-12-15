import { Injectable } from '@angular/core';
import { MapTile, TileGame } from '../models/tilegame.model';
import { GamesCommonService } from './games-common.service';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {

  game: TileGame;

  alltiles = [
    'daniele-01', 'irene-01', 'matteo-01', 'damiano-01', 'valentina-01', 'rachele-01',
    'daniele-02', 'irene-02', 'matteo-02', 'damiano-02', 'valentina-02', 'rachele-02',
  ];

  constructor(private games: GamesCommonService) {
    //this.game = localStorage.getItem('birthday-2020-saved');
    this.newGame();
  }
  
  newGame() {
    this.game = {
      size: 4,
      tiles: [],
    };
    let selected = this.alltiles.map(t=>t);
    this.games.shuffle(selected);
    selected.splice(8, selected.length - 8);
    selected.push(...selected.map(t=>t));
    this.game.tiles = selected.map(t => new MapTile(t));
    this.games.shuffle(this.game.tiles);
  }

}
