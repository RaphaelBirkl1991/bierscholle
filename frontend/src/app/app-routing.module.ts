import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProduktListeComponent} from "./produkt-liste/produkt-liste.component";
import {KopfzeileComponent} from "./kopfzeile/kopfzeile.component";
import {WarenkorbComponent} from "./warenkorb/warenkorb.component";
import {KundenListeComponent} from "./kunden-liste/kunden-liste.component";
import {HauptseiteComponent} from "./hauptseite/hauptseite.component";
import {ProduktBeschreibungComponent} from "./produkt-beschreibung/produkt-beschreibung.component";
import {KundendatenAnlegenComponent} from "./kundendaten-anlegen/kundendaten-anlegen.component";
import {WillkommenComponent} from "./willkommen/willkommen.component";
import {StellenangebotComponent} from "./stellenangebot/stellenangebot.component";

const routes: Routes = [
  {path: '', component: HauptseiteComponent},
  {path: 'produkt_liste', component: ProduktListeComponent},
  {path: 'kopfzeile', component: KopfzeileComponent},
  {path: 'warenkorb', component: WarenkorbComponent},
  {path: 'kunden_liste', component: KundenListeComponent},
  {path: 'produkt_beschreibung', component: ProduktBeschreibungComponent},
  {path: 'kundendaten_anlegen', component: KundendatenAnlegenComponent},
  {path: 'willkommen', component: WillkommenComponent},
  {path: 'stellenangebot', component: StellenangebotComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
