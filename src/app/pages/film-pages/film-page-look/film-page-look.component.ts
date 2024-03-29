import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Film } from 'src/app/interfaces/film';
import { FilmService } from 'src/app/services/film.service';
import { SettingsService } from 'src/app/services/settings.service';

@Component({
  selector: 'app-film-page-look',
  templateUrl: './film-page-look.component.html',
  styleUrls: ['./film-page-look.component.scss'],
})
export class FilmPageLookComponent {
  showSpinner = false;
  id: number = null;
  film: Film;

  constructor(
    private route: ActivatedRoute,
    private filmService: FilmService,
    public settingsService: SettingsService
  ) {
    this.showSpinner = true;
    console.log(this.route.snapshot.params['id']);
    this.id = this.route.snapshot.params['id'];
    this.filmService.getFilm(this.id).subscribe((film) => {
      this.film = film.result;
      console.log('film', film);
      this.showSpinner = false;
    });
  }
}
