import {Component, OnInit} from '@angular/core';
import {Stellenangebot} from "../stellenangebot";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-stellenangebot',
  templateUrl: './stellenangebot.component.html',
  styleUrls: ['./stellenangebot.component.css']
})
export class StellenangebotComponent implements OnInit {

  stellenangebote: Stellenangebot[] = [];

  stellenangebot: Stellenangebot = {
    id: 0,
    stellenbezeichnung: '',
    stellenbeschreibung: '',
    anforderungen: '',
    benefits: '',
    bruttojahresgehalt: 0,
    eintrittsdatum: '',
    zusatzinformationen: '',
    einsatzort: '',
  }

  gewStellenangebot?: Stellenangebot;

  constructor(private http: HttpClient) {
  }


  ngOnInit(): void {
    this.http.get<Stellenangebot[]>('api/stellenangebot').subscribe(s => this.stellenangebote = s);
  }


}
