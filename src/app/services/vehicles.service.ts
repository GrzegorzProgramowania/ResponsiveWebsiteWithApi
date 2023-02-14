import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Vehicle } from '../interfaces/vehicles';

export interface ApiResponse {
  count: number;
  next: string;
  previous: string;
  results: Vehicle[];
}

@Injectable({
  providedIn: 'root',
})
export class VehicleService {
  constructor(private http: HttpClient) {}

  getVehicle(id: number) {
    return this.http.get<Vehicle>(`https://swapi.tech/api/vehicles/${id}/`);
  }

  getVehicles() {
    return this.http.get<ApiResponse>(`https://swapi.tech/api/vehicles/`);
  }
}
