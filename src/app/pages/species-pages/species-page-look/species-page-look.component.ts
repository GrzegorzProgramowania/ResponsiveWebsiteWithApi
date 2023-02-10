import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Type } from 'src/app/interfaces/species';
import { SpeciesService } from 'src/app/services/species.service';
@Component({
  selector: 'app-species-page-look',
  templateUrl: './species-page-look.component.html',
  styleUrls: ['./species-page-look.component.scss'],
})
export class SpeciesPageLookComponent {
  id: number = null;
  species: Type;

  constructor(
    private route: ActivatedRoute,
    private speciesService: SpeciesService
  ) {
    console.log(this.route.snapshot.params['id']);
    this.id = this.route.snapshot.params['id'];
    this.speciesService.getType(this.id).subscribe((species) => {
      this.species = species;
      console.log('species', species);
    });
  }
}
