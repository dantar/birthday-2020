import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { HighscoresService } from 'src/app/services/highscores.service';
import { SharedDataService } from 'src/app/services/shared-data.service';

@Component({
  selector: 'app-register-score',
  templateUrl: './register-score.component.html',
  styleUrls: ['./register-score.component.scss']
})
export class RegisterScoreComponent implements OnInit, AfterViewInit {

  @ViewChild('playerinput') playerinput: ElementRef;
  player: string;

  constructor(
    public shared: SharedDataService,
    private scores: HighscoresService,
  ) { }

  ngAfterViewInit(): void {
    this.playerinput.nativeElement.focus();
  }

  ngOnInit(): void {
  }

  done() {
    this.scores.score({player: this.player, score: this.shared.game.score});
  }

}
