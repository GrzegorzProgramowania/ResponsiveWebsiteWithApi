import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-planet-list',
  template: `
    <div *ngFor="let planet of planets">
      {{ planet.name }}
    </div>
  `,
})
export class PlanetListComponent {
  @Input() planets: Planet[];
}
