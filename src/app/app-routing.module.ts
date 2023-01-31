import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HumanPageComponent } from './pages/people-pages/people-page.component';
import { FilmPageComponent } from './pages/film-pages/film-page.component';
import { SpeciesPageComponent } from './pages/species-pages/species-page.component';
import { HomePageComponent } from './pages/home-pages/home-page.component';
import { PlanetPageComponent } from './pages/planet-pages/planet-page.component';
import { StarshipsPageComponent } from './pages/starships-pages/starships-page.component';
import { VehiclesPageComponent } from './pages/vehicles-pages/vehicles-page.component';
import { PersonPageComponent } from './pages/people-pages/person-pages-look/person-page-look.component';

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
