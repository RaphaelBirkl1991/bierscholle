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
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { LogInComponent } from './log-in/log-in.component';
import { RegistrierenComponent } from './registrieren/registrieren.component';
import { ServicesComponent } from './services/services.component';

@NgModule({
  declarations: [
    AppComponent,
    WarenkorbComponent,
    ProduktBeschreibungComponent,
    ProduktListeComponent,
    VersandComponent,
    KopfzeileComponent,
    ProduktAlertsComponent,
    LogInComponent,
    RegistrierenComponent,
    ServicesComponent
  ],
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        AppRoutingModule,
        RouterModule.forRoot([
            {path: '', component: ProduktListeComponent},
            {path: 'produkts/:produktId', component: ProduktBeschreibungComponent},
            {path: 'warenkorb', component: WarenkorbComponent},
            {path: 'versand', component: VersandComponent},
            {path: 'services', component: ServicesComponent},
        ]),
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }