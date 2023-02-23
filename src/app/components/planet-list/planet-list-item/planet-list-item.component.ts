import { Component, Input } from "@angular/core";
import { Planet } from "../../../interfaces/planet";
import { SettingsService } from "src/app/services/settings.service";

@Component({
  selector: "app-planet-list-item",
  templateUrl: "planet-list-item.component.html",
  styleUrls: ["./planet-list-item.component.scss"],
})
export class PlanetListItemComponent {
  @Input() planet!: Planet;
  constructor(public settingsService: SettingsService) {}
}
