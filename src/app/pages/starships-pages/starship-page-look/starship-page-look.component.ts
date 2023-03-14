import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Starship, StarshipDetails } from 'src/app/interfaces/starships';
import { StarshipService } from 'src/app/services/starships.service';
import { SettingsService } from 'src/app/services/settings.service';

@Component({
  selector: 'app-starship-page-look',
  templateUrl: './starship-page-look.component.html',
  styleUrls: ['./starship-page-look.component.scss'],
})
export class StarshipPageLookComponent {
  showSpinner = false;
  id: number = null;
  starship: StarshipDetails;

  constructor(
    private route: ActivatedRoute,
    private starshipService: StarshipService,
    public settingsService: SettingsService
  ) {
    this.showSpinner = true;
    console.log(this.route.snapshot.params['id']);
    this.id = this.route.snapshot.params['id'];
    this.starshipService.getStarship(this.id).subscribe((starship) => {
      this.starship = starship.result;
      console.log('starship', this.starship);
      this.showSpinner = false;
    });
  }
}
