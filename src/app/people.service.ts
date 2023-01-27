import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Human } from './interfaces/people';

export interface ApiResponse {
  count: number;
  next: string;
  previous: string;
  results: Human[];
}

@Injectable({
  providedIn: 'root',
})
export class HumanService {
  constructor(private http: HttpClient) {}

  getHuman(id: number) {
    return this.http.get<Human>(`http https://swapi.dev/api/people/${id}/`);
  }

  getHumans() {
    return this.http.get<ApiResponse>(`http https://swapi.dev/api/people/`);
  }
}