import { Component, HostListener } from '@angular/core';
import { SettingsService } from 'src/app/services/settings.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  audio = new Audio('/assets/sounds/StarWars.mp3');
  constructor(public settingsService: SettingsService) {}

  @HostListener('window:click', ['$event'])
  onPageLoad() {
    this.audio?.play().then(() => {
      this.audio = null;
    });
  }
}
