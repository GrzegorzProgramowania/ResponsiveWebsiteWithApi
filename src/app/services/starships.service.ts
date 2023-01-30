import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Starship } from '../interfaces/starships';

export interface ApiResponse {
  count: number;
  next: string;
  previous: string;
  results: Starship[];
}

@Injectable({
  providedIn: 'root',
})
export class StarshipService {
  constructor(private http: HttpClient) {}

  getStarship(id: number) {
    return this.http.get<Starship>(`https://swapi.dev/api/starships/${id}/`);
  }

  getStarships() {
    return this.http.get<ApiResponse>(`https://swapi.dev/api/starships/`);
  }
}
