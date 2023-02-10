import { Component, Input } from '@angular/core';
import { Starship } from '../../interfaces/starships';
@Component({
  selector: 'app-starships-list-item',
  templateUrl: './starships-list-item.component.html',
  styleUrls: ['./starships-list-item.component.scss'],
})
export class StarshipsListItemComponent {
  @Input() starship!: Starship;

  // changeColor() {
  //   this.starship.active = !this.starship.active;
  // }
}
