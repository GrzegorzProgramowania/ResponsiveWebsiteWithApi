import { Component, Input } from "@angular/core";
import { Film } from "../../interfaces/film";

@Component({
  selector: "app-film-list",
  templateUrl: "film-list.component.html",
  styleUrls: ["./film-list.component.scss"],
})
export class FilmListComponent {
  @Input() films: Film[] = [];

  ngOnInit() {
    console.log(this.films);
  }
  getId(url: string): string {
    if (!url) {
      return "";
    }
    const regex = /^https:\/\/www\.swapi\.tech\/api\/films\/(.+)$/;
    const match = url.match(regex);
    if (match && match[1]) {
      return match[1];
    }
    return "";
  }

  // OLD REGEX
  // getId(url: string): string {
  //   console.log(url);
  //   const regex = /^https:\/\/swapi\.tech\/api\/films\/(.+)\/$/;
  //   const match = url.match(regex);
  //   console.log("match", match);
  //   return match[1];
  // }
}
