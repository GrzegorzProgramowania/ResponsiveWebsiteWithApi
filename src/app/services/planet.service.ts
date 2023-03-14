import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Planet, PlanetDetails } from '../interfaces/planet';

export interface PlanetsResponse {
  count: number;
  next: string;
  previous: string;
  results: Planet[];
  properties: string;
}

export interface PlanetResponse {
  message: string;
  result: PlanetDetails;
}

@Injectable({
  providedIn: 'root',
})
export class PlanetService {
  constructor(private http: HttpClient) {}

  getPlanet(id: number) {
    return this.http.get<PlanetResponse>(
      `https://swapi.tech/api/planets/${id}/`
    );
  }

  getPlanets() {
    return this.http.get<PlanetsResponse>(`https://swapi.tech/api/planets/`);
  }
}
