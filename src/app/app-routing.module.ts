import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HumanPageComponent } from './pages/people-pages/people-page.component';
import { FilmPageComponent } from './pages/film-pages/film-page.component';
import { SpeciesPageComponent } from './pages/species-pages/species-page.component';
import { HomePageComponent } from './pages/home-pages/home-page.component';
import { PlanetPageComponent } from './pages/planet-pages/planet-page.component';
import { StarshipsPageComponent } from './pages/starships-pages/starships-page.component';
import { VehiclesPageComponent } from './pages/vehicles-pages/vehicles-page.component';
import { PersonPageLookComponent } from './pages/people-pages/person-pages-look/person-page-look.component';
import { FilmPageLookComponent } from './pages/film-pages/film-page-look/film-page-look.component';
import { PlanetPageLookComponent } from './pages/planet-pages/planet-page-look/planet-page-look.component';
import { SpeciesPageLookComponent } from './pages/species-pages/species-page-look/species-page-look.component';
import { VehiclePageLookComponent } from './pages/vehicles-pages/vehicle-page-look/vehicle-page-look.component';
import { StarshipPageLookComponent } from './pages/starships-pages/starship-page-look/starship-page-look.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
  { path: 'films', component: FilmPageComponent, title: 'Films' },
  { path: 'films/:id', component: FilmPageLookComponent, title: 'Films' },
  { path: 'people', component: HumanPageComponent, title: 'People' },
  { path: 'people/:id', component: PersonPageLookComponent },
  { path: 'species', component: SpeciesPageComponent },
  {
    path: 'species/:id',
    component: SpeciesPageLookComponent,
    title: 'Species',
  },
  { path: 'planets', component: PlanetPageComponent, title: 'Planets' },
  { path: 'planets/:id', component: PlanetPageLookComponent },
  { path: 'starships', component: StarshipsPageComponent },
  { path: 'starships/:id', component: StarshipPageLookComponent },
  { path: 'vehicles', component: VehiclesPageComponent },
  { path: 'vehicles/:id', component: VehiclePageLookComponent },
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '/404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
