export interface Starship {
  uid: string;
  name: string;
  url: string;
}

export interface StarshipDetails {
  active: boolean;
  uid: string;
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
    //pilots [] or string ??
    pilots: [];
    starship_class: string;
    url: string;
  };
}

//Odl Api interface
// active: boolean;
// id: string;
// name: string;
// MGLT: string;
// cargo_capacity: number;
// consumables: string;
// cost_in_credits: number;
// created: string;
// crew: number;
// edited: string;
// hyperdrive_rating: number;
// length: number;
// manufacturer: string;
// max_atmosphering_speed: string;
// model: string;
// passengers: number;
// films: string[];
// //pilots [] or string ??
// pilots: [];
// starship_class: string;
// url: string;
