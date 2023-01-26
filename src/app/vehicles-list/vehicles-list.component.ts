import { Component, Input } from '@angular/core';
import { Vehicle } from '../interfaces/vehicles';

@Component({
  selector: 'app-vehicles-list',
  templateUrl: './vehicles-list.component.html',
  styleUrls: ['./vehicles-list.component.scss'],
})
export class VehiclesListComponent {
  @Input() vehicles: Vehicle[] = [];
}
