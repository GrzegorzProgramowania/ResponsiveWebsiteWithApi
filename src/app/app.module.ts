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
import { FooterComponent } from './footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TopBarComponent } from './top-bar/top-bar.component';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { PlanetPageComponent } from './pages/planet-page/planet-page.component';
import { HttpClientModule } from '@angular/common/http';
import { PlanetListComponent } from './planet-list/planet-list.component';
import { PlanetListItemComponent } from './planet-list-item/planet-list-item.component';
import { StarshipsPageComponent } from './pages/starships-page/starships-page.component';
import { VehiclesPageComponent } from './pages/vehicles-page/vehicles-page.component';
import { FilmListComponent } from './film-list/film-list.component';
import { FilmListItemComponent } from './film-list-item/film-list-item.component';
import { PeopleListComponent } from './people-list/people-list.component';
import { PeopleListItemComponent } from './people-list-item/people-list-item.component';

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
