import { Component, Input } from "@angular/core";
// import { Type } from '../interfaces/species';
import { Type } from "../../interfaces/species";

@Component({
  selector: "app-species-list",
  templateUrl: "species-list.component.html",
  styleUrls: ["./species-list.component.scss"],
})
export class SpeciesListComponent {
  @Input() species: Type[] = [];

  getId(url: string): string {
    if (!url) {
      return "";
    }
    const regex = /^https:\/\/www\.swapi\.tech\/api\/species\/(.+)$/;
    const match = url.match(regex);
    if (match && match[1]) {
      return match[1];
    }
    return "";
  }

  // getId(url: string): string {
  //   console.log(url);
  //   const regex = /^https:\/\/swapi\.tech\/api\/species\/(.+)\/$/;
  //   const match = url.match(regex);
  //   console.log('match', match);
  //   return match[1];
  // }
}
