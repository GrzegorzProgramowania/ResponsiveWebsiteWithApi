import { Component, Input } from "@angular/core";
import { Human } from "../../../interfaces/people";
import { SettingsService } from "src/app/services/settings.service";

@Component({
  selector: "app-people-list-item",
  templateUrl: "./people-list-item.component.html",
  styleUrls: ["./people-list-item.component.scss"],
})
export class PeopleListItemComponent {
  @Input() human!: Human;
  constructor(public settingsService: SettingsService) {}
}
