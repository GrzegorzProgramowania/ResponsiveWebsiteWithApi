import { Component } from '@angular/core';
import { SettingsService } from 'src/app/services/settings.service';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent {
  constructor(public settingsService: SettingsService) {}
}
