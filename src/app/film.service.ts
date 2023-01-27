import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Film } from './interfaces/film';

export interface ApiResponse {
  count: number;
  next: string;
  previous: string;
  results: Film[];
}

@Injectable({
  providedIn: 'root',
})
export class FilmService {
  constructor(private http: HttpClient) {}

  getFilm(id: number) {
    return this.http.get<Film>(`https://swapi.dev/api/films/${id}/`);
  }

  getFilms() {
    return this.http.get<ApiResponse>(`https://swapi.dev/api/films/`);
  }
}