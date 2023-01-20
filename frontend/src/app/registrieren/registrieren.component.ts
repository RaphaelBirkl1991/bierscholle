import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/services.component';

@Component({
  selector: 'app-registrieren',
  templateUrl: './registrieren.component.html',
  styleUrls: ['./registrieren.component.css']
})
export class RegistrierenComponent {


  vorname = '';
  nachname = '';
  strasse = '';
  hausnummer = 0;
  plz = 0;
  ort = '';
  email = '';
  passwort = '';
  passwortBest = '';


  constructor(private authService: AuthService, private router: Router) {}

  onSubmit(){

  }

  register() {
    if (this.passwort !== this.passwortBest) {
      alert('Passwords do not match');
      return;
    }

    this.authService.register(this.email, this.passwort).subscribe(response => {
      if (response.status === 201) {
        this.router.navigate(['/login']);
      } else {
        alert('An error occurred');
      }
    });
  }

}

