import { Component } from '@angular/core';
import {WarenkorbService} from "../warenkorb.service";

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
}
