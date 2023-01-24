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
import { KundendatenAnlegenComponent } from './kundendaten-anlegen/kundendaten-anlegen.component';
import { WillkommenComponent } from './willkommen/willkommen.component';

@NgModule({
  declarations: [
    AppComponent,
    ProduktListeComponent,
    KopfzeileComponent,
    WarenkorbComponent,
    KundenListeComponent,
    HauptseiteComponent,
    ProduktBeschreibungComponent,
    KundendatenAnlegenComponent,
    WillkommenComponent,

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
