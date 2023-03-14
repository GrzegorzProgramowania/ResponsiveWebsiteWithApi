import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Vehicle, VehicleDetails } from '../interfaces/vehicles';

export interface VehiclesResponse {
  count: number;
  next: string;
  previous: string;
  results: Vehicle[];
  properties: string;
}

export interface VehicleResponse {
  message: string;
  result: VehicleDetails;
}

@Injectable({
  providedIn: 'root',
})
export class VehicleService {
  constructor(private http: HttpClient) {}

  getVehicle(id: number) {
    return this.http.get<VehicleResponse>(
      `https://swapi.tech/api/vehicles/${id}/`
    );
  }

  getVehicles() {
    return this.http.get<VehiclesResponse>(`https://swapi.tech/api/vehicles/`);
  }
}
