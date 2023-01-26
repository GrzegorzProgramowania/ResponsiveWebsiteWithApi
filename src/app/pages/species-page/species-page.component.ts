import { Component } from '@angular/core';
import { Type } from 'src/app/interfaces/species';
import { SpeciesService } from '../../species.service';

@Component({
  selector: 'app-species-page',
  templateUrl: './species-page.component.html',
  styleUrls: ['./species-page.component.scss'],
})
export class SpeciesPageComponent {
  species: Type[] = [];

  constructor(private speciesService: SpeciesService) {}

  ngOnInit() {
    this.getTypes();
  }

  getTypes() {
    this.speciesService.getTypes().subscribe((species) => {
      console.log(species);
      this.species = species.results;
    });
  }
}
