import { Component, OnInit } from '@angular/core';
import { SharedDataService } from 'src/app/services/shared-data.service';

@Component({
  selector: 'app-gameplay',
  templateUrl: './gameplay.component.html',
  styleUrls: ['./gameplay.component.scss']
})
export class GameplayComponent implements OnInit {

  constructor(private shared: SharedDataService) { }

  ngOnInit(): void {
  }

  viewBox() {
    return `0 0 ${100 * this.shared.game.size} ${100 * this.shared.game.size}`;
  }

}
