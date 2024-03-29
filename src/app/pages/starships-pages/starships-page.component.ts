import { Component } from '@angular/core';
import { Starship } from 'src/app/interfaces/starships';
import { StarshipService } from '../../services/starships.service';

@Component({
  selector: 'app-starships-page',
  templateUrl: './starships-page.component.html',
  styleUrls: ['./starships-page.component.scss'],
})
export class StarshipsPageComponent {
  showSpinner = false;
  starships: Starship[] = [];

  constructor(private starshipService: StarshipService) {}

  ngOnInit() {
    this.getStarships();
  }

  getStarships() {
    this.showSpinner = true;
    this.starshipService.getStarships().subscribe((starships) => {
      console.log(starships);
      this.starships = starships.results;
      this.showSpinner = false;
    });
  }
}
