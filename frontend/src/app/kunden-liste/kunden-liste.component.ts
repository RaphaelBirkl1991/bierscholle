import {Component, OnInit} from '@angular/core';
import {Kunde} from "../kunde";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-kunden-liste',
  templateUrl: './kunden-liste.component.html',
  styleUrls: ['./kunden-liste.component.css']
})
export class KundenListeComponent implements OnInit {
  kunden: Kunde[] = [];
  kunde: Kunde = {vorname: '', nachname: '', strasse: '', hausnummer: 0, plz: 0, ort: '', email: '', telefonnummer: ''};

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.http.get<Kunde[]>('api/kunden_liste').subscribe(k => this.kunden = k);
  }
}
