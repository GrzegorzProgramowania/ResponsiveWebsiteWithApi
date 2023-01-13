import { Component } from '@angular/core';
import { Planet } from 'src/app/interfaces/planet';
import { PlanetService } from '../../planet.service';
import { PlanetListComponent } from 'src/app/planet-list/planet-list.component';

@Component({
  selector: 'app-planet',
  templateUrl: './planet-page.component.html',
  styleUrls: ['./planet-page.component.scss'],
})
export class PlanetPageComponent {
  planets: Planet[] = [];

  constructor(private planetService: PlanetService) {}

  ngOnInit() {
    this.getPlanets();
  }

  getPlanets() {
    this.planetService.getPlanets().subscribe((planets) => {
      this.planets = planets;
    });
  }
}
