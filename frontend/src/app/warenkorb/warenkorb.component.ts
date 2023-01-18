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


  remove(id: number) {
    // this.items = this.items.filter(items => items.id !== id);
    // this.items.splice(this.items.indexOf(id), 1 );
      this.items = this.items.splice(1,7);
  }



  // clearWarenkorb(produkt: Produkt) {
  //
  // }
}
