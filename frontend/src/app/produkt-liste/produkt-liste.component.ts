import { Component } from '@angular/core';
import {produkts} from "../produkts";

@Component({
  selector: 'app-produkt-liste',
  templateUrl: './produkt-liste.component.html',
  styleUrls: ['./produkt-liste.component.css']
})
export class ProduktListeComponent {
  produkts = produkts;





















  // merken(){
  //   window.alert('es wurde schon gemerkt!');
  // }
  // benachrichtigen(){
  //   window.alert('Ich sage dir bescheid wenn es reduziert ist!');
  //
  // }


}
