import { Component, HostListener } from '@angular/core';
import { SettingsService } from 'src/app/services/settings.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  showIntro = true;
  

  hideIntro() {
    this.showIntro = false;
  }

  constructor(public settingsService: SettingsService) {}
}
