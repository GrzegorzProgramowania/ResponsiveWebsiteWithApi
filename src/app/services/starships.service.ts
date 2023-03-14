import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Starship, StarshipDetails } from '../interfaces/starships';
import { VehicleDetails } from '../interfaces/vehicles';

export interface StarshipsResponse {
  count: number;
  next: string;
  previous: string;
  results: Starship[];
  properties: string;
}

export interface StarshipResponse {
  message: string;
  result: StarshipDetails;
}

@Injectable({
  providedIn: 'root',
})
export class StarshipService {
  constructor(private http: HttpClient) {}

  getStarship(id: number) {
    return this.http.get<StarshipResponse>(
      `https://swapi.tech/api/starships/${id}/`
    );
  }

  getStarships() {
    return this.http.get<StarshipsResponse>(
      `https://swapi.tech/api/starships/`
    );
  }
}
