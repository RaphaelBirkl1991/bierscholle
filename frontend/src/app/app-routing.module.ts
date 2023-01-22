import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProduktListeComponent} from "./produkt-liste/produkt-liste.component";
import {KopfzeileComponent} from "./kopfzeile/kopfzeile.component";
import {WarenkorbComponent} from "./warenkorb/warenkorb.component";
import {KundenListeComponent} from "./kunden-liste/kunden-liste.component";
import {HauptseiteComponent} from "./hauptseite/hauptseite.component";
import {ProduktBeschreibungComponent} from "./produkt-beschreibung/produkt-beschreibung.component";
import {LogInComponent} from "./log-in/log-in.component";
import {RegistrierenComponent} from "./registrieren/registrieren.component";
import {WillkommenComponent} from "./willkommen/willkommen.component";
import {SchlussseiteComponent} from "./schlussseite/schlussseite.component";

const routes: Routes = [
  {path: '', component: HauptseiteComponent},
  {path: 'produkt_liste', component: ProduktListeComponent},
  {path: 'kopfzeile', component: KopfzeileComponent},
  {path: 'warenkorb', component: WarenkorbComponent},
  {path: 'kunden_liste', component: KundenListeComponent},
  {path: 'produkt_beschreibung', component: ProduktBeschreibungComponent},
  {path: 'log_in', component: LogInComponent},
  {path: 'registrieren', component: RegistrierenComponent},
  {path: 'willkommen', component: WillkommenComponent},
  {path: 'schlussseite', component: SchlussseiteComponent},
  {path: 'kopfzeile', component:KopfzeileComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
