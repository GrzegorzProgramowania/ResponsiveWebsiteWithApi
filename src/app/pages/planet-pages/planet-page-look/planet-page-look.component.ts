import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Planet, PlanetDetails } from 'src/app/interfaces/planet';
import { PlanetService } from 'src/app/services/planet.service';
import { SettingsService } from 'src/app/services/settings.service';

@Component({
  selector: 'app-planet-page-look',
  templateUrl: './planet-page-look.component.html',
  styleUrls: ['./planet-page-look.component.scss'],
})
export class PlanetPageLookComponent {
  showSpinner = false;
  id: number = null;
  planet: PlanetDetails;

  constructor(
    private route: ActivatedRoute,
    private planetService: PlanetService,
    public settingsService: SettingsService
  ) {
    this.showSpinner = true;
    console.log(this.route.snapshot.params['id']);
    this.id = this.route.snapshot.params['id'];
    this.planetService.getPlanet(this.id).subscribe((planet) => {
      this.planet = planet.result;
      console.log('planet', this.planet);
      this.showSpinner = false;
    });
  }
}
