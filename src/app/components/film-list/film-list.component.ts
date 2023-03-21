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
}
