import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProduktListeComponent} from "./produkt-liste/produkt-liste.component";
import {KopfzeileComponent} from "./kopfzeile/kopfzeile.component";
import {WarenkorbComponent} from "./warenkorb/warenkorb.component";
import {KundenListeComponent} from "./kunden-liste/kunden-liste.component";
import {HauptseiteComponent} from "./hauptseite/hauptseite.component";

const routes: Routes = [
  {path: 'produkt_liste', component: ProduktListeComponent},
  {path: 'kopfzeile', component: KopfzeileComponent},
  {path: 'warenkorb', component: WarenkorbComponent},
  {path: 'kunden_liste', component: KundenListeComponent},
  {path: '', component: HauptseiteComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
