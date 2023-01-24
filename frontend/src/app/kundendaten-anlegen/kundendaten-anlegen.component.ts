import { Component } from '@angular/core';
import {Kunde} from "../kunde";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-kundendaten-anlegen',
  templateUrl: './kundendaten-anlegen.component.html',
  styleUrls: ['./kundendaten-anlegen.component.css']
})


export class KundendatenAnlegenComponent {


  kunden: Kunde[] = [];
  neuerKunde: Kunde = {vorname: '', nachname: '', strasse: '', hausnummer: 0, plz: 0, ort: '', email: '', telefonnummer: ''};


  //constructor(private authService: AuthService, private router: Router) {}

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
   // this.http.get<Entry[]>('/api/guestbook').subscribe(e => this.entries = e);
  }


 save() {
    this.http.post<Kunde>('api/kundendaten_anlegen', this.neuerKunde).subscribe();
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

