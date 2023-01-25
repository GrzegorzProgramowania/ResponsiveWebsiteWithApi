import { Component, Input } from '@angular/core';
import { Human } from '../interfaces/people';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.scss'],
})
export class PeopleListComponent {
  @Input() humans: Human[] = [];
}
