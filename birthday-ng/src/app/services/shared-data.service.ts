import { Injectable } from '@angular/core';
import { MapTile, TileGame } from '../models/tilegame.model';
import { GamesCommonService } from './games-common.service';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {

  game: TileGame;

  alltiles = [
    'daniele', 'irene', 'matteo', 'damiano', 'valentina', 'rachele', 'tutti', 'ragazzi',
  ];

  constructor(private games: GamesCommonService) {
    //this.game = localStorage.getItem('birthday-2020-saved');
    this.newGame();
  }
  
  newGame() {
    this.game = {
      size: 4,
      tiles: [],
      score: 0,
    };
    let selected = this.alltiles.map(t=>t);
    this.games.shuffle(selected);
    selected.splice(8, selected.length - 8);
    selected.push(...selected.map(t=>t));
    this.game.tiles = selected.map(t => new MapTile(t));
    this.games.shuffle(this.game.tiles);
  }

}
