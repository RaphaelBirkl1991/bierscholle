import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/services.component';

@Component({
  selector: 'app-registrieren',
  templateUrl: './registrieren.component.html',
  styleUrls: ['./registrieren.component.css']
})
export class RegistrierenComponent {
  email = '';
  password = '';
  passwordConfirm = '';

  constructor(private authService: AuthService, private router: Router) {}

  register() {
    if (this.password !== this.passwordConfirm) {
      alert('Passwords do not match');
      return;
    }

    this.authService.register(this.email, this.password).subscribe(response => {
      if (response.status === 201) {
        this.router.navigate(['/login']);
      } else {
        alert('An error occurred');
      }
    });
  }

}
