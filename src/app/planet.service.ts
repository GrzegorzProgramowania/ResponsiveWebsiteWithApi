import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Planet } from './interfaces/planet';

@Injectable({
  providedIn: 'root',
})
export class PlanetService {
  constructor(private http: HttpClient) {}

  getPlanet(id: number) {
    return this.http.get<Planet>(`https://swapi.dev/api/planets/${id}/`);
  }

  getPlanets() {
    return this.http.get<Planet[]>(`https://swapi.dev/api/planets/`);
  }
}
