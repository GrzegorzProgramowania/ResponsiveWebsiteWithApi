import { Component, Input } from "@angular/core";
import { Starship } from "src/app/interfaces/starships";
import { SettingsService } from "src/app/services/settings.service";

@Component({
  selector: "app-starships-list-item",
  templateUrl: "./starships-list-item.component.html",
  styleUrls: ["./starships-list-item.component.scss"],
})
export class StarshipsListItemComponent {
  @Input() starship!: Starship;
  constructor(public settingsService: SettingsService) {}
}
