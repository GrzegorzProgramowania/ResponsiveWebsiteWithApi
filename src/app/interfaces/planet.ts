export interface Planet {
  uid: string;
  name: string;
  url: string;
}

export interface PlanetDetails {
  uid: string;
  description: string;
  properties: {
    name: string;
    url: string;
    climate: string;
    created: string;
    diameter: string;
    edited: string;
    films: [];
    gravity: string;
    orbital_period: number;
    population: string;
    residents: [];
    rotation_period: string;
    surface_water: string;
    terrain: string;
  };
}
