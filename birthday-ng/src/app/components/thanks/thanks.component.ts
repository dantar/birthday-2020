import { Component, OnInit } from '@angular/core';
import { SharedDataService } from 'src/app/services/shared-data.service';

@Component({
  selector: 'app-thanks',
  templateUrl: './thanks.component.html',
  styleUrls: ['./thanks.component.scss']
})
export class ThanksComponent implements OnInit {

  constructor(
    public shared: SharedDataService,
  ) { }

  ngOnInit(): void {
  }

  clickThanks() {
    this.shared.game.state = 'entername';
  }

}
