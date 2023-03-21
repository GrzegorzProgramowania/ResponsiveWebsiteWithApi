export interface Vehicle {
  uid: string;
  name: string;
  url: string;
}

export interface VehicleDetails {
  uid: string;
  description: string;
  properties: {
    name: string;
    cargo_capacity: string;
    consumables: string;
    cost_in_credits: string;
    created: string;
    crew: number;
    edited: string;
    length: string;
    manufacturer: string;
    max_atmosphering_speed: string;
    model: string;
    passengers: string;
    pilots: [];
    films: [];
    url: string;
    vehicle_class: string;
  };
}
