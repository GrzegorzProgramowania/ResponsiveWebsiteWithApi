import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { HomePageComponent } from './pages/home-pages/home-page.component';
import { FilmPageComponent } from './pages/film-pages/film-page.component';
import { HumanPageComponent } from './pages/people-pages/people-page.component';
import { SpeciesPageComponent } from './pages/species-pages/species-page.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { PlanetPageComponent } from './pages/planet-pages/planet-page.component';
import { HttpClientModule } from '@angular/common/http';
import { PlanetListComponent } from './components/planet-list/planet-list.component';
import { PlanetListItemComponent } from './components/planet-list/planet-list-item/planet-list-item.component';
import { StarshipsPageComponent } from './pages/starships-pages/starships-page.component';
import { VehiclesPageComponent } from './pages/vehicles-pages/vehicles-page.component';
import { FilmListComponent } from './components/film-list/film-list.component';
import { FilmListItemComponent } from './components/film-list/film-list-item/film-list-item.component';
import { PeopleListComponent } from './components/people-list/people-list.component';
import { PeopleListItemComponent } from './components/people-list/people-list-item/people-list-item.component';
import { SpeciesListComponent } from './components/species-list/species-list.component';
import { SpeciesListItemComponent } from './components/species-list/species-list-item/species-list-item.component';
import { VehiclesListComponent } from './components/vehicles-list/vehicles-list.component';
import { VehiclesListItemComponent } from './components/vehicles-list/vehicles-list-item/vehicles-list-item.component';
import { StarshipsListComponent } from './components/starships-list/starships-list.component';
import { StarshipsListItemComponent } from './components/starships-list/starships-list-item/starships-list-item.component';
import { PersonPageLookComponent } from './pages/people-pages/person-pages-look/person-page-look.component';
import { LoaderComponentComponent } from './components/loader-component/loader-component.component';
import { FilmPageLookComponent } from './pages/film-pages/film-page-look/film-page-look.component';
import { PlanetPageLookComponent } from './pages/planet-pages/planet-page-look/planet-page-look.component';
import { SpeciesPageLookComponent } from './pages/species-pages/species-page-look/species-page-look.component';
import { StarshipPageLookComponent } from './pages/starships-pages/starship-page-look/starship-page-look.component';
import { VehiclePageLookComponent } from './pages/vehicles-pages/vehicle-page-look/vehicle-page-look.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    FilmPageComponent,
    HumanPageComponent,
    SpeciesPageComponent,
    HeaderComponent,
    FooterComponent,
    TopBarComponent,
    PlanetPageComponent,
    PlanetListComponent,
    PlanetListItemComponent,
    StarshipsPageComponent,
    VehiclesPageComponent,
    FilmListComponent,
    FilmListItemComponent,
    PeopleListComponent,
    PeopleListItemComponent,
    SpeciesListComponent,
    SpeciesListItemComponent,
    VehiclesListComponent,
    VehiclesListItemComponent,
    StarshipsListComponent,
    StarshipsListItemComponent,
    PersonPageLookComponent,
    LoaderComponentComponent,
    FilmPageLookComponent,
    PlanetPageLookComponent,
    SpeciesPageLookComponent,
    StarshipPageLookComponent,
    VehiclePageLookComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    TooltipModule.forRoot(),
    BsDropdownModule.forRoot(),
    NgbModule,
    CollapseModule.forRoot(),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
