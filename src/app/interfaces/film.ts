import { Data } from '@angular/router';

export interface Film {
  id: string;
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
    //data typ data ?
    release_date: Data;
    //data string?
    species: [];
    starships: [];
    url: string;
    vehicles: [];
  };
}

// Old Api interface
// id: string;
// title: string;
// characters: string[];
// created: string;
// director: string;
// edited: string;
// episode_id: number;
// opening_crawl: string;
// planets: string[];
// producer: string;
// release_date: string;
// species: string;
// starships: string[];
// url: string;
// vehicles: string[];
