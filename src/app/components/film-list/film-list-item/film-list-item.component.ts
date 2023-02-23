import { Component, Input } from "@angular/core";
import { Film } from "../../../interfaces/film";
import { SettingsService } from "src/app/services/settings.service";
@Component({
  selector: "app-film-list-item",
  templateUrl: "./film-list-item.component.html",
  styleUrls: ["./film-list-item.component.scss"],
})
export class FilmListItemComponent {
  @Input() film!: Film;
  constructor(public settingsService: SettingsService) {}
}
