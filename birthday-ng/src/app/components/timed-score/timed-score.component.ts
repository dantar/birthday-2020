import { Component, OnInit } from '@angular/core';
import { SharedDataService } from 'src/app/services/shared-data.service';

@Component({
  selector: '[app-timed-score]',
  templateUrl: './timed-score.component.html',
  styleUrls: ['./timed-score.component.scss']
})
export class TimedScoreComponent implements OnInit {

  ticker: any;

  constructor(
    public shared: SharedDataService,
  ) { }

  ngOnInit(): void {
    this.startTicker();
  }

  startTicker() {
    if (!this.ticker) {
      this.ticker = setInterval(() => {
        switch (this.shared.game.state) {
          case 'running':
            this.shared.game.score++;
            break;
          case 'paused':
          case 'complete':
            this.pauseTicker();
            break;
          default:
            break;
        }
      }, 1000);
    }
  }

  pauseTicker() {
    this.ticker = null;
  }

}
