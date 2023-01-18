import { HttpClient } from "@angular/common/http";
import {Produkt, produkts} from './produkts';
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

  addToWarenkorb1(produkt: any) {
    this.items.push(produkt);
  }

  // clearWarenkorb(produkt: Produkt) {
  //   this.items.splice(this.items.indexOf(produkt), 1);
  // }

  // clearWarenkorb() {
  //   this.items = [];
  //   return this.items;
  // }

  getVersandPrices(){
    return this.http.get<{type: string, price: number}[]>
    ('/assets/versand.json');
  }

}
