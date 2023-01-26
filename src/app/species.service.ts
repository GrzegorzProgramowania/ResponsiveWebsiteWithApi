import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Type } from './interfaces/species';

export interface ApiResponse {
  count: number;
  next: string;
  previous: string;
  results: Type[];
}

@Injectable({
  providedIn: 'root',
})
export class SpeciesService {
  constructor(private http: HttpClient) {}

  getType(id: number) {
    return this.http.get<Type>(`https://swapi.dev/api/species/${id}/`);
  }

  getTypes() {
    return this.http.get<ApiResponse>(`https://swapi.dev/api/species/`);
  }
}
