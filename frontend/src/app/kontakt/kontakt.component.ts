import {Component, OnInit} from '@angular/core';
import {Kontakt} from "../kontakt";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-kontakt',
  templateUrl: './kontakt.component.html',
  styleUrls: ['./kontakt.component.css']
})
export class KontaktComponent implements OnInit{
  kontakte: Kontakt[] = [];
  neuerKontakt: Kontakt={name: '', strasse: '', ort: '', email: '', nachricht: ''};

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {

  }
  save(){
    this.http.post<Kontakt>('api/kontakt_formular', this.neuerKontakt).subscribe();
  }

}
