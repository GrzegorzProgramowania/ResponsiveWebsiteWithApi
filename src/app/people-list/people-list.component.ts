import { Component, Input } from '@angular/core';
import { Human } from '../interfaces/people';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.scss'],
})
export class PeopleListComponent {
  @Input() humans: Human[] = [];

  getId(url: string): string {
    console.log(url);
    const regex = /^https:\/\/swapi\.tech\/api\/people\/(.+)\/$/;
    const match = url.match(regex);
    console.log('match', match);
    return match[1];
  }
}
