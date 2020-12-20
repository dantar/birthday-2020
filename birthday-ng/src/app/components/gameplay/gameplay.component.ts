import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MapTile } from 'src/app/models/tilegame.model';
import { AudioPlayService } from 'src/app/services/audio-play.service';
import { SharedDataService } from 'src/app/services/shared-data.service';

@Component({
  selector: 'app-gameplay',
  templateUrl: './gameplay.component.html',
  styleUrls: ['./gameplay.component.scss']
})
export class GameplayComponent implements OnInit {

  first: MapTile;
  second: MapTile;
  match: boolean;
  timer: any;

  constructor(
    public shared: SharedDataService,
    private changes: ChangeDetectorRef,
    private audio: AudioPlayService,
    ) { }

  ngOnInit(): void {
    this.match = false;
    this.first = null;
    this.second = null;
  }

  viewBox() {
    return `0 0 ${100 * this.shared.game.size} ${100 * this.shared.game.size}`;
  }

  tileTransform(index: number) {
    let x = index % 4;
    let y = (index - x ) / 4;
    return `translate(${100 * x}, ${100 * y})`;
  }

  clickTile(tile: MapTile) {
    this.audio.play('action');
    if (this.first) {
      if (this.second) {
        this.checkVisible();
      } else {
        if (tile == this.first) {
          this.clickFirstTileAgain();
        } else {
          this.clickSecondTile(tile);
        }
      }
    } else {
      this.clickFirstTile(tile);
    }
  }
  clickFirstTile(tile: MapTile) {
    this.first = tile;
    this.first.state = 'visible';
  }
  clickFirstTileAgain() {
    this.first.state = 'hidden';
    this.first = null;
  }
  clickSecondTile(tile: MapTile) {
    this.second = tile;
    this.second.state = 'visible';
    if (this.first.name === this.second.name) {
      this.match = true;
    }
    this.startCountDown();
  }

  startCountDown() {
    this.timer = setInterval(() => {
      this.checkVisible();
    }, 1200);
  }

  checkVisible() {
    if (this.match) {
      this.first.state = 'gone';
      this.second.state = 'gone';
      if (this.shared.game.tiles.filter(t => t.state !== 'gone').length === 0) {
        this.completeStage();
      }
    } else {
      this.first.state = 'hidden';
      this.second.state = 'hidden';
    }
    this.match = false;
    this.first = null;
    this.second = null;
    if (this.timer) {
      clearInterval(this.timer);
    }
    this.timer = null;
    this.changes.detectChanges();
  }

  completeStage() {
    this.shared.newGame();
  }

}
