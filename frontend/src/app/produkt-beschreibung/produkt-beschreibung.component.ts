import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {WarenkorbService} from "../warenkorb.service";
import {Produkt, produkts} from "../produkts";

@Component({
  selector: 'app-produkt-beschreibung',
  templateUrl: './produkt-beschreibung.component.html',
  styleUrls: ['./produkt-beschreibung.component.css']
})
export class ProduktBeschreibungComponent implements OnInit{
  addToWarenkorb(produkt: Produkt){
    this.warenkorbService.addToWarenkorb(produkt);
    window.alert('Dein Produkt ist im Warenkorb');
  }
  produkt: { price: number; name: string; id: number; beschreibung: string }  | undefined;

  constructor(
    private route: ActivatedRoute,
    private warenkorbService: WarenkorbService
  ) {}

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const produktIdFromRoute= Number(routeParams.get('produktId'));
    this.produkt =produkts.find(produkt => produkt.id === produktIdFromRoute);
  }

}
