import { Component } from '@angular/core';
import { Film } from 'src/app/interfaces/film';
import { FilmService } from '../../services/film.service';

@Component({
  selector: 'app-film-page',
  templateUrl: './film-page.component.html',
  styleUrls: ['./film-page.component.scss'],
})
export class FilmPageComponent {
  showSpinner = false;
  films: Film[] = [];

  constructor(private filmService: FilmService) {}

  ngOnInit() {
    this.getFilms();
  }

  getFilms() {
    this.showSpinner = true;
    this.filmService.getFilms().subscribe((films) => {
      console.log(films);
      this.films = films.results;
      this.showSpinner = false;
    });
  }
}
