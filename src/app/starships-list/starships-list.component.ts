import { Component, Input } from '@angular/core';
import { Starship } from '../interfaces/starships';

@Component({
  selector: 'app-starships-list',
  templateUrl: 'starships-list.component.html',
  styleUrls: ['./starships-list.component.scss'],
})
export class FilmListComponent {
  @Input() starships: Starship[] = [];
}
