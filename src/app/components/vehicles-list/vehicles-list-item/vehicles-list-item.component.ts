import { Component, Input } from "@angular/core";
import { Vehicle } from "../../../interfaces/vehicles";
import { SettingsService } from "src/app/services/settings.service";
@Component({
  selector: "app-vehicles-list-item",
  templateUrl: "./vehicles-list-item.component.html",
  styleUrls: ["./vehicles-list-item.component.scss"],
})
export class VehiclesListItemComponent {
  @Input() vehicle!: Vehicle;
  constructor(public settingsService: SettingsService) {}
}
