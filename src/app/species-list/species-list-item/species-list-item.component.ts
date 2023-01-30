import { Component, Input } from '@angular/core';
import { Type } from '../../interfaces/species';
@Component({
  selector: 'app-species-list-item',
  templateUrl: './species-list-item.component.html',
  styleUrls: ['./species-list-item.component.scss'],
})
export class SpeciesListItemComponent {
  @Input() species!: Type;
}
