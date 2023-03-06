import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Type, TypeDetails } from '../interfaces/species';

export interface TypesResponse {
  count: number;
  next: string;
  previous: string;
  results: Type[];
}

export interface TypeResponse {
  message: string;
  result: TypeDetails;
}

@Injectable({
  providedIn: 'root',
})
export class SpeciesService {
  constructor(private http: HttpClient) {}

  getType(id: number) {
    return this.http.get<TypeResponse>(`https://swapi.tech/api/species/${id}/`);
  }

  getTypes() {
    return this.http.get<TypesResponse>(`https://swapi.tech/api/species/`);
  }
}
