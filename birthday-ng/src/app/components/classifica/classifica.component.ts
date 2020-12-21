import { Component, OnInit } from '@angular/core';
import { HighscoresService } from 'src/app/services/highscores.service';
import { SharedDataService } from 'src/app/services/shared-data.service';

@Component({
  selector: 'app-classifica',
  templateUrl: './classifica.component.html',
  styleUrls: ['./classifica.component.scss']
})
export class ClassificaComponent implements OnInit {

  constructor(
    public shared: SharedDataService,
    public scores: HighscoresService,
  ) { }

  ngOnInit(): void {
  }

}
