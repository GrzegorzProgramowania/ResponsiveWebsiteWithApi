import { Component } from '@angular/core';
import { PlanetService } from './planet.service';

@Component({
  selector: 'app-planet',
  templateUrl: './planet.component.html',
  styleUrls: ['./planet.component.scss'],
})
export class PlanetComponent {
  planet: any;

  constructor(private planetService: PlanetService) {}

  ngOnInit() {
    this.getPlanet(1);
  }

  getPlanet(id: number) {
    this.planetService.getPlanet(id).subscribe((planet) => {
      this.planet = planet;
    });
  }
}
