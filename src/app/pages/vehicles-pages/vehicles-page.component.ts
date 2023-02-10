import { Component } from '@angular/core';
import { Vehicle } from 'src/app/interfaces/vehicles';
import { VehicleService } from '../../services/vehicles.service';

@Component({
  selector: 'app-vehicles-page',
  templateUrl: './vehicles-page.component.html',
  styleUrls: ['./vehicles-page.component.scss'],
})
export class VehiclesPageComponent {
  showSpinner = false;
  vehicles: Vehicle[] = [];

  constructor(private vehicleService: VehicleService) {}

  ngOnInit() {
    this.getVehicles();
  }

  getVehicles() {
    this.showSpinner = true;
    this.vehicleService.getVehicles().subscribe((vehicles) => {
      console.log(vehicles);
      this.vehicles = vehicles.results;
      this.showSpinner = false;
    });
  }
}
