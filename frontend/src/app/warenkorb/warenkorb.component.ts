import {Component, OnInit} from '@angular/core';
import {Warenkorb} from "../warenkorb";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-warenkorb',
  templateUrl: './warenkorb.component.html',
  styleUrls: ['./warenkorb.component.css']
})
export class WarenkorbComponent implements OnInit{

  warenkorbe: Warenkorb[] = [];
  warenkorb: Warenkorb= {produktbezeichnung: '', preis: 0};

  // Warenkorb?: Warenkorb;

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.http.get<Warenkorb[]>('api/warenkorb').subscribe(w => this.warenkorbe = w);
  }


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
