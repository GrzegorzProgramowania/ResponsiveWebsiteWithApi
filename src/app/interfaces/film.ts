import { Data } from '@angular/router';
export interface Film {
  uid: string;
  properties: {
    title: string;
    characters: [];
    created: string;
    director: string;
    edited: string;
    episode_id: number;
    opening_crawl: string;
    planets: [];
    producer: string;
    release_date: Data;
    species: [];
    starships: [];
    url: string;
    vehicles: [];
  };
}
