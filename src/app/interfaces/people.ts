export interface Human {
  uid: string;
  name: string;
  url: string;
}

export interface HumanDetails {
  uid: string;
  description: string;
  properties: {
    name: string;
    url: string;
    films: [];
    height: number;
    mass: number;
    hair_color: string;
    skin_color: string;
    eye_color: string;
    birth_year: string;
    gender: string;
    homeworld: string;
    species: [];
    vehicles: [];
    starships: [];
    created: string;
    edited: string;
  };
}
