import { Component } from '@angular/core';
import { Starship } from 'src/app/interfaces/starships';
import { StarshipService } from '../../starships.service';

@Component({
  selector: 'app-starships-page',
  templateUrl: './starships-page.component.html',
  styleUrls: ['./starships-page.component.scss'],
})
export class StashipPageComponent {
  starships: Starship[] = [];

  constructor(private starshipService: StarshipService) {}

  ngOnInit() {
    this.getStarships();
  }

  getStarships() {
    this.starshipService.getStarships().subscribe((starships) => {
      console.log(starships);
      this.starships = starships.results;
    });
  }
}
