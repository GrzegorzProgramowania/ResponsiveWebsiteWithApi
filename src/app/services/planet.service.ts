import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Planet } from '../interfaces/planet';

export interface ApiResponse {
  count: number;
  next: string;
  previous: string;
  results: Planet[];
}

@Injectable({
  providedIn: 'root',
})
export class PlanetService {
  constructor(private http: HttpClient) {}

  getPlanet(id: number) {
    return this.http.get<Planet>(`https://swapi.tech/api/planets/${id}/`);
  }

  getPlanets() {
    return this.http.get<ApiResponse>(`https://swapi.tech/api/planets/`);
  }
}
