import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HighScoreDto, HighScoresDto } from '../models/highscores.model';

@Injectable({
  providedIn: 'root'
})
export class HighscoresService {

  highscores: HighScoresDto;

  constructor(private http: HttpClient) {
    this.highscores = {highscores: []};
    this.refresh();
  }

  refresh() {
    this.http.post(`${environment.endpoint}/highscores`, this.highscores)
    .subscribe(
      (hs: HighScoresDto) => {
        this.highscores = hs;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  compare(h1: HighScoreDto, h2: HighScoreDto) {
    if (h1.score < h2.score) return -1;
    if (h1.score > h2.score) return 1;
    return 0;
  }

  score(hs: HighScoreDto) {
    let found = this.highscores.highscores.filter(s => s.player === hs.player);
    if (found.length > 0) {
      if (found[0].score > hs.score) found[0].score = hs.score;
    } else {
      this.highscores.highscores.push(hs);
    }
    this.highscores.highscores.sort(this.compare);
    this.refresh();
  }

}
