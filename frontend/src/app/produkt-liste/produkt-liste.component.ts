import {Component, OnInit} from '@angular/core';
import {Produkt} from "../produkt";
import {HttpClient} from "@angular/common/http";
import {Kunde} from "../kunde";
import {Warenkorb} from "../warenkorb";

@Component({
  selector: 'app-produkt-liste',
  templateUrl: './produkt-liste.component.html',
  styleUrls: ['./produkt-liste.component.css']
})
export class ProduktListeComponent implements OnInit{
  produkte: Produkt[] = [];
  produkt: Produkt = {bezeichnung: '', preis: 0, alkoholgehalt: 0, brautyp: '', fuellmenge: 0, geschmack: '', bittere: '',
                      anlass: '', zutaten: '', beschreibung: '', bildUrl: '', id: 0};

  gewPodukt?: Produkt;

  warenkorb: Warenkorb[] = [];
  neuerWarenkorb: Warenkorb = {produktbezeichnung: '', preis: 0};



  constructor(private http: HttpClient) {}



  ngOnInit(): void {  this.http.get<Produkt[]>('/api/produkt_sortiment').subscribe(p => this.produkte = p);}

  onSelect(produkt: Produkt): void {
    this.gewPodukt = produkt;
    this.neuerWarenkorb.produktbezeichnung = this.gewPodukt.bezeichnung;
    this.neuerWarenkorb.preis = this.gewPodukt.preis;
  }

  save() {
    this.http.post<Warenkorb[]>('/warenkorb', this.neuerWarenkorb).subscribe(w => this.warenkorb = w);

  }








}



