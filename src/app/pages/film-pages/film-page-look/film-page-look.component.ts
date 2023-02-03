import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Film } from 'src/app/interfaces/film';
import { FilmService } from 'src/app/services/film.service';

@Component({
  selector: 'app-film-page-look',
  templateUrl: './film-page-look.component.html',
  styleUrls: ['./film-page-look.component.scss'],
})
export class FilmPageLookComponent {
  id: number = null;
  film: Film;

  constructor(private route: ActivatedRoute, private filmService: FilmService) {
    console.log(this.route.snapshot.params['id']);
    this.id = this.route.snapshot.params['id'];
    this.filmService.getFilm(this.id).subscribe((film) => {
      this.film = film;
      console.log('person', film);
    });
  }
}
