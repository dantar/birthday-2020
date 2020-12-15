import { Component, OnInit } from '@angular/core';
import { SharedDataService } from 'src/app/services/shared-data.service';

@Component({
  selector: 'app-gameplay',
  templateUrl: './gameplay.component.html',
  styleUrls: ['./gameplay.component.scss']
})
export class GameplayComponent implements OnInit {

  constructor(public shared: SharedDataService) { }

  ngOnInit(): void {
  }

  viewBox() {
    return `0 0 ${100 * this.shared.game.size} ${100 * this.shared.game.size}`;
  }

  tileTransform(index: number) {
    let x = index % 4;
    let y = (index - x ) / 4;
    return `translate(${100 * x}, ${100 * y})`;
  }

}
