import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/services.component';
import {Kunde} from "../kunde";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-registrieren',
  templateUrl: './registrieren.component.html',
  styleUrls: ['./registrieren.component.css']
})


export class RegistrierenComponent {


  kunden: Kunde[] = [];
  neuerKunde: Kunde = {vorname: '', nachname: '', strasse: '', hausnummer: 0, plz: 0, ort: '', email: '', passwort:''};


  //constructor(private authService: AuthService, private router: Router) {}

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
   // this.http.get<Entry[]>('/api/guestbook').subscribe(e => this.entries = e);
  }


 save() {
    this.http.post<Kunde[]>('api/registrieren', this.neuerKunde).subscribe(k => this.kunden = k);
 }








  // Register Methode mit Passwort Vergleich

  // register() {
  //   if (this.passwort !== this.passwortBest) {
  //     alert('Passwords do not match');
  //     return;
  //   }
  //   this.authService.register(this.email, this.passwort).subscribe(response => {
  //     if (response.status === 201) {
  //       this.router.navigate(['/login']);
  //     } else {
  //       alert('An error occurred');
  //     }
  //   });
  // }

}

