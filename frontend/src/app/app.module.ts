import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WarenkorbComponent } from './warenkorb/warenkorb.component';
import { ProduktBeschreibungComponent } from './produkt-beschreibung/produkt-beschreibung.component';
import { ProduktListeComponent } from './produkt-liste/produkt-liste.component';
import { VersandComponent } from './versand/versand.component';
import { KopfzeileComponent } from './kopfzeile/kopfzeile.component';
import {RouterModule} from "@angular/router";
import { ProduktAlertsComponent } from './produkt-alerts/produkt-alerts.component';
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    WarenkorbComponent,
    ProduktBeschreibungComponent,
    ProduktListeComponent,
    VersandComponent,
    KopfzeileComponent,
    ProduktAlertsComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: '', component: ProduktListeComponent },
      {path: 'produkts/:produktId', component: ProduktBeschreibungComponent},
      {path: 'warenkorb', component: WarenkorbComponent},
      {path: 'versand', component: VersandComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
