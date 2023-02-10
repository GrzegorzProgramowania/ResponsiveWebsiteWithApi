import { Component, Input } from '@angular/core';
import { Type } from '../interfaces/species';

@Component({
  selector: 'app-species-list',
  templateUrl: 'species-list.component.html',
  styleUrls: ['./species-list.component.scss'],
})
export class SpeciesListComponent {
  @Input() species: Type[] = [];

  getId(url: string): string {
    console.log(url);
    const regex = /^https:\/\/swapi\.dev\/api\/species\/(.+)\/$/;
    const match = url.match(regex);
    console.log('match', match);
    return match[1];
  }
}
