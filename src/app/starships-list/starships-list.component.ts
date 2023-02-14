import { Component, Input } from '@angular/core';
import { Starship } from '../interfaces/starships';

@Component({
  selector: 'app-starships-list',
  templateUrl: 'starships-list.component.html',
  styleUrls: ['./starships-list.component.scss'],
})
export class StarshipsListComponent {
  @Input() starships: Starship[] = [];

  getId(url: string): string {
    if (!url) {
      return '';
    }
    const regex = /^https:\/\/www\.swapi\.tech\/api\/starships\/(.+)$/;
    const match = url.match(regex);
    if (match && match[1]) {
      return match[1];
    }
    return '';
  }

  // Old regex
  // getId(url: string): string {
  //   console.log(url);
  //   const regex = /^https:\/\/swapi\.tech\/api\/starships\/(.+)\/$/;
  //   const match = url.match(regex);
  //   console.log('match', match);
  //   return match[1];
  // }
}
