import { Component } from '@angular/core';
import {WarenkorbService} from "./warenkorb.service";
import {Warenkorb} from "../warenkorb";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-warenkorb',
  templateUrl: './warenkorb.component.html',
  styleUrls: ['./warenkorb.component.css']
})
export class WarenkorbComponent {

    // warenkorb: Warenkorb[] = [];
    // neuerWarenkorb: Warenkorb = {produktbezeichnung: '', preis: 0};

  // constructor(private http: HttpClient) { }
  //
  // ngOnInit(): void{

  // }


  // save() {
  //   this.http.post<Warenkorb[]>('/warenkorb', this.neuerWarenkorb).subscribe(w => this.warenkorb = w);
  // }



}





























  //
  //
  //
  // items = this.warenkorbService.getItems();
  //
  // constructor(
  //   private warenkorbService: WarenkorbService
  // ) { }

//   kaufen() {
//     window.alert('Gekauft!');
//   }
//
//   total() {
//     let sum = 0;
//     for (let item of this.items) {
//       sum += item.preis;
//     }
//     return sum;
//   }
//
//
//   remove(id: number) {
//     // this.items = this.items.filter(items => items.id !== id);
//     // this.items.splice(this.items.indexOf(id), 1 );
//     this.items = this.items.splice(1,7);
//   }
//
// }
