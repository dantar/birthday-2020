import { Component, OnInit } from '@angular/core';
import { AudioPlayService } from 'src/app/services/audio-play.service';

@Component({
  selector: 'app-theme-toggle',
  templateUrl: './theme-toggle.component.html',
  styleUrls: ['./theme-toggle.component.scss']
})
export class ThemeToggleComponent implements OnInit {

  enabled: boolean;

  constructor(private audio: AudioPlayService) {}

  ngOnInit(): void {
    this.enabled = false;
  }

  toggleEnabled() {
    this.enabled = !this.enabled;
    if (this.enabled) {
      this.audio.theme('theme-01');
    } else {
      this.audio.theme(null);
    }
  }

}
