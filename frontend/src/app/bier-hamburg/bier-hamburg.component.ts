import {Component, OnInit} from '@angular/core';
import {Produkt} from "../produkts";

@Component({
  selector: 'app-bier-hamburg',
  templateUrl: './bier-hamburg.component.html',
  styleUrls: ['./bier-hamburg.component.css']
})
export class BierHamburgComponent implements OnInit{

  produkts : Produkt[]= [
    {
      id: 1,
      bezeichnung: 'Astra 20 x 0,5l',
      preis: 17.10,
      beschreibung: 'Pilsener mit 4,9% vol.\n' +
        'Das Original, Astra Urtyp, aus dem Jahre 1909: mild, feinwürzig und einfach lecker ' +
        'mit 4,9% Alkohol. Mit viel Liebe gebraut im Herzen Hamburgs.'
    },
    {
      id: 2,
      bezeichnung: 'Gröninger Pils 24 x 0,33',
      preis: 23.99,
      beschreibung: 'Mit einer 225-jährigen Tradition verstehen wir von der Gröninger Privatbrauerei unser Handwerk.' +
        ' Nach deutschem Reinheitsgebot gebraut und dem wichtigsten Grundsatz verschrieben: Nur die ' +
        'besten Zutaten kommen ins Fass! Der Hopfen aus der berühmten Hallertau bei München, das Malz von' +
        ' einer exklusiven Spezialmälzerei aus Bamberg, das frische Wasser aus der Lüneburger Heide'
    },
    {
      id: 3,
      bezeichnung: 'Holsten Pilsener 20 x 0,5l',
      preis: 16.99,
      beschreibung: 'Das Holsten Pilsener wird untergärig gebraut und hat einen Alkoholgehalt von 4,8%. Als ' +
        'Zutaten werden Wasser, Gerstenmalz und Hopfen verwendet.Im Glas zeigt sich das Holsten Pilsener ' +
        'kristallklar, goldgelb. Lebendig sprudelt die Kohlensäure und dadurch wirkt das Pils sehr erfrischend.'
    },
    {
      id: 4,
      bezeichnung: 'Versandkosten Schnell',
      preis:5.50,
      beschreibung: 'Besoders schneller Versand !.'
    },
    {
      id: 5,
      bezeichnung: 'Versandkosten Normal',
      preis:5.50,
      beschreibung: 'Normaler Versand !.'
    },
    {
      id: 6,
      bezeichnung: 'Versandkosten Express',
      preis:5.50,
      beschreibung: 'Express Versand !.'
    },
  ];

  constructor() {
  }

  ngOnInit(): void {
  }


}
