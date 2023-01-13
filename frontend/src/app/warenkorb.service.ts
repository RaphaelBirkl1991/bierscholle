import { HttpClient } from "@angular/common/http";
import { Produkt } from './produkts';
import { Injectable } from '@angular/core';




@Injectable({
  providedIn: 'root'
})
export class WarenkorbService {
  items: Produkt[] = [];

  constructor(
    private http: HttpClient
  ) { }

  addToWarenkorb(produkt: Produkt) {
    this.items.push(produkt);
  }

  getItems() {
    return this.items;
  }

  clearWarenkorb() {
    this.items = [];
    return this.items;
  }

  getVersandPrices(){
    return this.http.get<{type: string, price: number}[]>
    ('/assets/shipping.json');
  }

}
