import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HumanPageComponent } from './pages/people-page/people-page.component';
import { FilmPageComponent } from './pages/film-page/film-page.component';
import { SpeciesPageComponent } from './pages/species-page/species-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { PlanetPageComponent } from './pages/planet-page/planet-page.component';
import { StarshipsPageComponent } from './pages/starships-page/starships-page.component';
import { VehiclesPageComponent } from './pages/vehicles-page/vehicles-page.component';
import { PersonPageComponent } from './pages/person-page/person-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
  { path: 'films', component: FilmPageComponent, title: 'Films' },
  { path: 'people', component: HumanPageComponent, title: 'People' },
  { path: 'people/:id', component: PersonPageComponent },
  { path: 'species', component: SpeciesPageComponent },
  { path: 'planets', component: PlanetPageComponent },
  { path: 'starships', component: StarshipsPageComponent },
  { path: 'vehicles', component: VehiclesPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
