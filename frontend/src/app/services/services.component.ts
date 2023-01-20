// import { Component } from '@angular/core';
//
// @Component({
//   selector: 'app-services',
//   templateUrl: './services.component.html',
//   styleUrls: ['./services.component.css']
// })
// export class ServicesComponent {
//
// }


import {Component, Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    const body = { email, password };
    return this.http.post<any>('/api/login', body);
  }

  register(email: string, password: string): Observable<any> {
    const body = { email, password };
    return this.http.post<any>('/api/register', body);
  }
}
@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']

})
export class ServicesComponent {
  constructor(private servicesComponent: ServicesComponent) {
  }}
