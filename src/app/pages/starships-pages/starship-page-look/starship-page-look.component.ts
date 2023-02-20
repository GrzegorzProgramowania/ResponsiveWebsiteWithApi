import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Starship } from 'src/app/interfaces/starships';
import { StarshipService } from 'src/app/services/starships.service';

@Component({
  selector: 'app-starship-page-look',
  templateUrl: './starship-page-look.component.html',
  styleUrls: ['./starship-page-look.component.scss'],
})
export class StarshipPageLookComponent {
  showSpinner = false;
  id: number = null;
  starship: Starship;

  constructor(
    private route: ActivatedRoute,
    private starshipService: StarshipService
  ) {
    this.showSpinner = true;
    console.log(this.route.snapshot.params['id']);
    this.id = this.route.snapshot.params['id'];
    this.starshipService.getStarship(this.id).subscribe((starship) => {
      this.starship = starship;
      console.log('starship', starship);
      this.showSpinner = false;
    });
  }
}
