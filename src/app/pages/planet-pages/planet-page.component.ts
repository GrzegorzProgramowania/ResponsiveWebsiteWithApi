import { Component } from '@angular/core';
import { Planet } from 'src/app/interfaces/planet';
import { PlanetService } from '../../services/planet.service';

@Component({
  selector: 'app-planet-page',
  templateUrl: './planet-page.component.html',
  styleUrls: ['./planet-page.component.scss'],
})
export class PlanetPageComponent {
  showSpinner = false;
  planets: Planet[] = [];

  constructor(private planetService: PlanetService) {}

  ngOnInit() {
    this.getPlanets();
  }

  getPlanets() {
    this.showSpinner = true;
    this.planetService.getPlanets().subscribe((planets) => {
      console.log(planets);
      this.planets = planets.results;
      this.showSpinner = false;
    });
  }
}
