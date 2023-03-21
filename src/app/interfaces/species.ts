export interface Type {
  uid: string;
  name: string;
  url: string;
}

export interface TypeDetails {
  uid: string;
  description: string;
  properties: {
    name: string;
    average_height: string;
    average_lifespan: string;
    classification: string;
    created: string;
    designation: string;
    edited: string;
    eye_colors: string;
    hair_colors: string;
    homeworld: string;
    language: string;
    people: [];
    films: [];
    skin_colors: string;
    url: string;
  };
}
