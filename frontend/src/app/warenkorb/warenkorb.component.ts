import { Component } from '@angular/core';
import {WarenkorbService} from "../warenkorb.service";


@Component({
  selector: 'app-warenkorb',
  templateUrl: './warenkorb.component.html',
  styleUrls: ['./warenkorb.component.css']
})
export class WarenkorbComponent {
  items = this.warenkorbService.getItems();
  // it: any;

  constructor(
    private warenkorbService: WarenkorbService
  ) { }

  kaufen() {
    window.alert('Gekauft!');
  }

  total() {
    let sum = 0;
    for (let item of this.items) {
      sum += item.price;
    }
    return sum;
  }

  // clearWarenkorb(it: any) {
  //
  // }

  // clearWarenkorb(produkt: Produkt) {
  //
  // }
}
