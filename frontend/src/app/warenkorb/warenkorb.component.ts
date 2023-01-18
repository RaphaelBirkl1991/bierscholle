import { Component } from '@angular/core';
import {WarenkorbService} from "../warenkorb.service";
import {VersandComponent} from "../versand/versand.component";

@Component({
  selector: 'app-warenkorb',
  templateUrl: './warenkorb.component.html',
  styleUrls: ['./warenkorb.component.css']
})
export class WarenkorbComponent {

  items = this.warenkorbService.getItems();



  constructor(
    private warenkorbService: WarenkorbService

  ) { }

  kaufen() {
    window.alert('Gekauft!');
  }
  // get shippingCost() {
  //   let shippingCost = 0;
  //   for (let warenkorb of this.items) {
  //     if (warenkorb.price < 25) {
  //       shippingCost += 5;
  //     } else {
  //       shippingCost += 3;
  //     }
  //   }
  //   return shippingCost;
  // }
  total() {
    let sum = 0;
    for (let item of this.items) {
      sum += item.price;
    }
    return sum;
  }

  // remove(id:number) {
  //   this.items = this.items.filter(items => items.id !== id);
  // }
  remove() {
    this.items = this.items.splice(1,7);
  }

}

