import {Component, OnInit} from '@angular/core';
import {Produkt} from "../produkt";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-produkt-liste',
  templateUrl: './produkt-liste.component.html',
  styleUrls: ['./produkt-liste.component.css']
})
export class ProduktListeComponent implements OnInit{
  produkte: Produkt[] = [];
  produkt: Produkt = {bezeichnung: '', preis: 0, beschreibung: '', id: 0};
  gewPodukt?: Produkt;

  constructor(private http: HttpClient) {}



  ngOnInit(): void {  this.http.get<Produkt[]>('/api/produkt_sortiment').subscribe(p => this.produkte = p);}

  onSelect(produkt: Produkt): void {
    this.gewPodukt = produkt;
  }








}



