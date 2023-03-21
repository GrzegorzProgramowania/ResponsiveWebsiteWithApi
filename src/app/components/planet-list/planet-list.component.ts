import { Component, Input } from "@angular/core";
// import { Planet } from '../interfaces/planet';
import { Planet } from "../../interfaces/planet";

@Component({
  selector: "app-planet-list",
  templateUrl: "planet-list.component.html",
  styleUrls: ["./planet-list.component.scss"],
})
export class PlanetListComponent {
  @Input() planets: Planet[] = [];
}
