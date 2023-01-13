import { Component, OnInit } from '@angular/core';
import { PlanetComponent } from './planet/planet.component';
import { PlanetService } from './planet.service';
import { PlanetListComponent } from './planet-list/planet-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

// let id = number;
export class AppComponent implements OnInit {
  constructor(private planetService: PlanetService) {}

  ngOnInit() {
    this.planetService.getPlanet(1).subscribe((planet) => {
      console.warn(planet);
    });
    this.planetService
      .getPlanets()
      .subscribe((planets) => (this.planets = planets));
  }
}
