export interface Starship {
  uid: string;
  name: string;
  url: string;
}

export interface StarshipDetails {
  active: boolean;
  uid: string;
  description: string;
  properties: {
    name: string;
    MGLT: string;
    cargo_capacity: string;
    consumables: string;
    cost_in_credits: string;
    created: string;
    crew: string;
    edited: string;
    hyperdrive_rating: string;
    length: string;
    manufacturer: string;
    max_atmosphering_speed: string;
    model: string;
    passengers: string;
    films: [];
    pilots: [];
    starship_class: string;
    url: string;
  };
}
