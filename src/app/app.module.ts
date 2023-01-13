import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { AboutUsPageComponent } from './pages/about-us-page/about-us-page.component';
import { HistoryPageComponent } from './pages/history-page/history-page.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TopBarComponent } from './top-bar/top-bar.component';
import { CollapseModule } from 'ngx-bootstrap/collapse';
//API
import { PlanetComponent } from './planet/planet.component';
import { HttpClientModule } from '@angular/common/http';
import { PlanetListComponent } from './planet-list/planet-list.component';
import { UserPageComponent } from './user-page/user-page.component';
import { UserListComponent } from './user-list/user-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ContactPageComponent,
    AboutUsPageComponent,
    HistoryPageComponent,
    HeaderComponent,
    FooterComponent,
    TopBarComponent,
    PlanetComponent,
    PlanetListComponent,
    UserPageComponent,
    UserListComponent,
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
