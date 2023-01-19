import { Component } from '@angular/core';
import {Produkt} from "../produkt";
import {HttpClient} from "@angular/common/http";



@Component({
  selector: 'app-produkt-liste',
  templateUrl: './produkt-liste.component.html',
  styleUrls: ['./produkt-liste.component.css']
})
export class ProduktListeComponent {
  produkts : Produkt[] = [];
  produkt: Produkt = {bezeichnung: '', preis: 0, beschreibung: '', id: 0};

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<Produkt[]>('/api/produkt_sortiment').subscribe(p => this.produkts = p);
  }





















  // merken(){
  //   window.alert('es wurde schon gemerkt!');
  // }
  // benachrichtigen(){
  //   window.alert('Ich sage dir bescheid wenn es reduziert ist!');
  //
  // }


}
