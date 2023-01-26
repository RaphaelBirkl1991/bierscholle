import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { ProduktListeComponent } from './produkt-liste/produkt-liste.component';
import { KopfzeileComponent } from './kopfzeile/kopfzeile.component';
import { WarenkorbComponent } from './warenkorb/warenkorb.component';
import { KundenListeComponent } from './kunden-liste/kunden-liste.component';
import { HauptseiteComponent } from './hauptseite/hauptseite.component';
import { ProduktBeschreibungComponent } from './produkt-beschreibung/produkt-beschreibung.component';
import { WillkommenComponent } from './willkommen/willkommen.component';
import { StellenangebotComponent } from './stellenangebot/stellenangebot.component';
import { EuroFormatierungPipe } from './euro-formatierung.pipe';
import { SchlussseiteComponent } from './schlussseite/schlussseite.component';
import { UeberUnsComponent } from './ueber-uns/ueber-uns.component';
import { KontaktComponent } from './kontakt/kontakt.component';
import {KaufAbschliessenComponent} from "./kauf-abschliessen/kauf-abschliessen.component";
import { KaufBestaetigungComponent } from './kauf-bestaetigung/kauf-bestaetigung.component';

@NgModule({
  declarations: [
    AppComponent,
    ProduktListeComponent,
    KopfzeileComponent,
    WarenkorbComponent,
    KundenListeComponent,
    HauptseiteComponent,
    ProduktBeschreibungComponent,
    WillkommenComponent,
    StellenangebotComponent,
    EuroFormatierungPipe,
    SchlussseiteComponent,
    UeberUnsComponent,
    KontaktComponent,
    KaufAbschliessenComponent,
    KaufBestaetigungComponent,

  ],
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        AppRoutingModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
