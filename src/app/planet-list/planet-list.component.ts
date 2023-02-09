import { Component, Input } from '@angular/core';
import { Planet } from '../interfaces/planet';

@Component({
  selector: 'app-planet-list',
  templateUrl: 'planet-list.component.html',
  styleUrls: ['./planet-list.component.scss'],
})
export class PlanetListComponent {
  @Input() planets: Planet[] = [];

  getId(url: string): string {
    console.log(url);
    const regex = /^https:\/\/swapi\.dev\/api\/planet\/(.+)\/$/;
    const match = url.match(regex);
    console.log('match', match);
    return match[1];
  }
}
