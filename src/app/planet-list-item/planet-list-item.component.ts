import { Component, Input } from '@angular/core';
import { Planet } from '../interfaces/planet';

@Component({
  selector: 'app-planet-list-item',
  templateUrl: 'planet-list-item.component.html',
  styleUrls: ['./planet-list-item.component.scss'],
})
export class PlanetListItemComponent {
  @Input() planet!: Planet;
}
