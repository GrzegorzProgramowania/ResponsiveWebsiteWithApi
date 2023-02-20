import { Component, Input } from "@angular/core";
// import { Vehicle } from '../interfaces/vehicles';
import { Vehicle } from "../../interfaces/vehicles";

@Component({
  selector: "app-vehicles-list",
  templateUrl: "./vehicles-list.component.html",
  styleUrls: ["./vehicles-list.component.scss"],
})
export class VehiclesListComponent {
  @Input() vehicles: Vehicle[] = [];

  getId(url: string): string {
    if (!url) {
      return "";
    }
    const regex = /^https:\/\/www\.swapi\.tech\/api\/vehicles\/(.+)$/;
    const match = url.match(regex);
    if (match && match[1]) {
      return match[1];
    }
    return "";
  }
  // old regex
  // getId(url: string): string {
  //   console.log(url);
  //   const regex = /^https:\/\/swapi\.tech\/api\/vehicles\/(.+)\/$/;
  //   const match = url.match(regex);
  //   console.log('match', match);
  //   return match[1];
  // }
}
