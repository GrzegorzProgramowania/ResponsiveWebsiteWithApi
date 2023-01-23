import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PeoplePageComponent } from './pages/people-page/people-page.component';
import { FilmPageComponent } from './pages/film-page/film-page.component';
import { SpeciesPageComponent } from './pages/species-page/species-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { PlanetPageComponent } from './pages/planet-page/planet-page.component';
import { StarshipsPageComponent } from './pages/starships-page/starships-page.component';
import { VehiclesPageComponent } from './pages/vehicles-page/vehicles-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
  { path: 'Films', component: FilmPageComponent },
  { path: 'People', component: PeoplePageComponent },
  { path: 'Species', component: SpeciesPageComponent },
  { path: 'planets', component: PlanetPageComponent },
  { path: 'Starships', component: StarshipsPageComponent },
  { path: 'Vehicles', component: VehiclesPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
