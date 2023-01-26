import { Component, Input } from '@angular/core';
import { Type } from '../interfaces/species';

@Component({
  selector: 'app-species-list',
  templateUrl: 'species-list.component.html',
  styleUrls: ['./species-list.component.scss'],
})
export class FilmListComponent {
  @Input() species: Type[] = [];
}
