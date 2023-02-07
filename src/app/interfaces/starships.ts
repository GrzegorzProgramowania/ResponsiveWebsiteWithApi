export interface Starship {
  active: boolean;
  id: string;
  name: string;
  MGLT: string;
  cargo_capacity: number;
  consumables: string;
  cost_in_credits: number;
  created: string;
  crew: number;
  edited: string;
  hyperdrive_rating: number;
  length: number;
  manufacturer: string;
  max_atmosphering_speed: string;
  model: string;
  passengers: number;
  films: string[];
  //pilots [] or string ??
  pilots: [];
  starship_class: string;
  url: string;
}
