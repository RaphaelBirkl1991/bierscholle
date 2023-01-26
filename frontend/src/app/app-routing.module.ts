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
import {KarteikartenComponent} from "./karteikarten/karteikarten.component";
import {StellenangebotComponent} from "./stellenangebot/stellenangebot.component";
import {UeberUnsComponent} from "./ueber-uns/ueber-uns.component";
import {KontaktComponent} from "./kontakt/kontakt.component";

const routes: Routes = [
  {path: '', component: HauptseiteComponent},
  {path: 'produkt_liste', component: ProduktListeComponent},
  {path: 'kopfzeile', component: KopfzeileComponent},
  {path: 'warenkorb', component: WarenkorbComponent},
  {path: 'kunden_liste', component: KundenListeComponent},
  {path: 'produkt_beschreibung', component: ProduktBeschreibungComponent},
  {path: 'kundendaten_anlegen', component: KundendatenAnlegenComponent},
  {path: 'willkommen', component: WillkommenComponent},
  {path: 'kopfzeile', component:KopfzeileComponent},
  {path: 'karteikarten', component:KarteikartenComponent}
  {path: 'stellenangebot', component: StellenangebotComponent},
  {path: 'ueber_uns', component: UeberUnsComponent},
  {path:'kontakt', component:KontaktComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
