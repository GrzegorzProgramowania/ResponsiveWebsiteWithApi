import { Component, Input } from "@angular/core";
import { Type } from "../../../interfaces/species";
import { SettingsService } from "src/app/services/settings.service";

@Component({
  selector: "app-species-list-item",
  templateUrl: "./species-list-item.component.html",
  styleUrls: ["./species-list-item.component.scss"],
})
export class SpeciesListItemComponent {
  @Input() species!: Type;
  constructor(public settingsService: SettingsService) {}
}
