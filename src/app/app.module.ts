import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { FilmPageComponent } from './pages/film-page/film-page.component';
import { HumanPageComponent } from './pages/people-page/people-page.component';
import { SpeciesPageComponent } from './pages/species-page/species-page.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TopBarComponent } from './top-bar/top-bar.component';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { PlanetPageComponent } from './pages/planet-page/planet-page.component';
import { HttpClientModule } from '@angular/common/http';
import { PlanetListComponent } from './planet-list/planet-list.component';
import { PlanetListItemComponent } from './planet-list-item/planet-list-item.component';
import { StarshipsPageComponent } from './pages/starships-page/starships-page.component';
import { VehiclesPageComponent } from './pages/vehicles-page/vehicles-page.component';
import { FilmListComponent } from './components/film-list/film-list.component';
import { FilmListItemComponent } from './components/film-list/film-list-item/film-list-item.component';
import { PeopleListComponent } from './people-list/people-list.component';
import { PeopleListItemComponent } from './people-list-item/people-list-item.component';
import { SpeciesListComponent } from './species-list/species-list.component';
import { SpeciesListItemComponent } from './species-list-item/species-list-item.component';
import { VehiclesListComponent } from './vehicles-list/vehicles-list.component';
import { VehiclesListItemComponent } from './vehicles-list-item/vehicles-list-item.component';
import { StarshipsListComponent } from './starships-list/starships-list.component';
import { StarshipsListItemComponent } from './starships-list-item/starships-list-item.component';
import { PersonPageComponent } from './pages/person-page/person-page.component';

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
    PersonPageComponent,
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
