export interface Vehicle {
  id: string;
  name: string;
  cargo_capacity: number;
  consumables: string;
  cost_in_credits: number;
  created: string;
  crew: number;
  edited: string;
  length: number;
  manufacturer: string;
  max_atmosphering_speed: number;
  model: string;
  passengers: number;
  pilots: [];
  films: string[];
  url: string;
  vehicle_class: string;
}
