import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Planet } from 'src/app/interfaces/planet';
import { PlanetService } from 'src/app/services/planet.service';

@Component({
  selector: 'app-planet-page-look',
  templateUrl: './planet-page-look.component.html',
  styleUrls: ['./planet-page-look.component.scss'],
})
export class PlanetPageLookComponent {
  showSpinner = false;
  id: number = null;
  planet: Planet;

  constructor(
    private route: ActivatedRoute,
    private planetService: PlanetService
  ) {
    this.showSpinner = true;
    console.log(this.route.snapshot.params['id']);
    this.id = this.route.snapshot.params['id'];
    this.planetService.getPlanet(this.id).subscribe((planet) => {
      this.planet = planet;
      console.log('planet', planet);
      this.showSpinner = false;
    });
  }
}
