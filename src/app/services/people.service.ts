import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Human, HumanDetails } from '../interfaces/people';

export interface PeopleResponse {
  count: number;
  next: string;
  previous: string;
  results: Human[];
  properties: string;
}

export interface HumanResponse {
  message: string;
  result: HumanDetails;
}

@Injectable({
  providedIn: 'root',
})
export class HumanService {
  constructor(private http: HttpClient) {}

  getHuman(id: number) {
    return this.http.get<HumanResponse>(`https://swapi.tech/api/people/${id}/`);
  }

  getHumans() {
    return this.http.get<PeopleResponse>(`https://swapi.tech/api/people/`);
  }
}
