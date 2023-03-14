import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Vehicle, VehicleDetails } from 'src/app/interfaces/vehicles';
import { VehicleService } from 'src/app/services/vehicles.service';
import { SettingsService } from 'src/app/services/settings.service';

@Component({
  selector: 'app-vehicle-page-look',
  templateUrl: './vehicle-page-look.component.html',
  styleUrls: ['./vehicle-page-look.component.scss'],
})
export class VehiclePageLookComponent {
  showSpinner = false;
  id: number = null;
  vehicle: VehicleDetails;

  constructor(
    private route: ActivatedRoute,
    private vehicleService: VehicleService,
    public settingsService: SettingsService
  ) {
    this.showSpinner = true;
    console.log(this.route.snapshot.params['id']);
    this.id = this.route.snapshot.params['id'];
    this.vehicleService.getVehicle(this.id).subscribe((vehicle) => {
      this.vehicle = vehicle.result;
      console.log('vehicle', this.vehicle);
      this.showSpinner = false;
    });
  }
}
