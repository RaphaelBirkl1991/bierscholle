import {Component, OnInit} from '@angular/core';
import {WarenkorbService} from "../warenkorb.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-versand',
  templateUrl: './versand.component.html',
  styleUrls: ['./versand.component.css']
})
export class VersandComponent  implements OnInit{

  constructor(private warenkorbService: WarenkorbService)
  {}
  versandKosten!: Observable<{type: string, price: number}[]>;

  ngOnInit(): void {
    this.versandKosten = this.warenkorbService.getVersandPrices();
  }

}
