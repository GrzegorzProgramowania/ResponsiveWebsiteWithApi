import { Component } from "@angular/core";
import { SettingsService } from "src/app/services/settings.service";
// import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
// import { faCoffee } from "@fortawesome/free-solid-svg-icons";
@Component({
  selector: "app-top-bar",
  templateUrl: "./top-bar.component.html",
  styleUrls: ["./top-bar.component.scss"],
})
export class TopBarComponent {
  constructor(public settingsService: SettingsService) {}
}
