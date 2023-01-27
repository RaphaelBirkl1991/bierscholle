import { Component } from '@angular/core';
import {Kunde} from "../kunde";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-kauf-abschliessen',
  templateUrl: './kauf-abschliessen.component.html',
  styleUrls: ['./kauf-abschliessen.component.css']
})
export class KaufAbschliessenComponent {

  kunden: Kunde[] = [];
  neuerKunde: Kunde = {vorname: '', nachname: '', strasse: '', hausnummer: 0, plz: 0, ort: '', email: '', telefonnummer: ''};


  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {}

  save() {
    this.http.post<Kunde>('api/kauf_abschliessen', this.neuerKunde).subscribe();
  }

}
