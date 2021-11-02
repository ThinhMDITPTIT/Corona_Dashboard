import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {
  FontAwesomeModule,
  FaIconLibrary,
} from '@fortawesome/angular-fontawesome';
import {
  faInfoCircle,
  faPlusSquare,
  faProcedures,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { ReuseableCardModule } from './reuseable-card/reuseable-card.module';
import { HttpClientModule } from '@angular/common/http';
import { CrdChartModule } from './crd-chart/crd-chart.module';
import { LeafletMapModule } from './leaflet-map/leaflet-map.module';
import { HomepageComponent } from './homepage/homepage.component';

@NgModule({
  declarations: [AppComponent, HomepageComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    ReuseableCardModule,
    LeafletMapModule,
    CrdChartModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    // Add an icon to the library for convenient access in other components
    library.addIcons(faUser, faPlusSquare, faProcedures, faInfoCircle);
  }
}
