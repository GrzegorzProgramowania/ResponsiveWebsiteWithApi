import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Film } from '../interfaces/film';

export interface FilmsResponse {
  count: number;
  next: string;
  previous: string;
  result: Film[];
}

export interface FilmResponse {
  message: string;
  result: Film;
}

@Injectable({
  providedIn: 'root',
})
export class FilmService {
  constructor(private http: HttpClient) {}

  getFilm(id: number) {
    return this.http.get<FilmResponse>(`https://swapi.tech/api/films/${id}/`);
  }

  getFilms() {
    return this.http.get<FilmsResponse>(`https://swapi.tech/api/films/`);
  }
}
