import {Component, OnInit} from '@angular/core';
import {Produkt} from "../produkts";

@Component({
  selector: 'app-bier-bayern',
  templateUrl: './bier-bayern.component.html',
  styleUrls: ['./bier-bayern.component.css']
})
export class BierBayernComponent implements OnInit{

produkts : Produkt[]= [
  {
    id: 1,
    name: 'Giesinger Weißbier 20 x 0,5l',
    price: 24.91 ,
    beschreibung: 'Mittlerweile wohl eines der beliebtesten Biere Münchens. Untergärig gebraut nach dem ' +
      'Reinheitsgebot' +
      ' von 1516. Mit Wasser aus unserem eigenen Tiefbrunnen. Unser Flaggschiff. Schmeckt. Gut. Leuchtend goldgelb. ' +
      'Mit kompaktem, weißem Schaum und leichter Trübung. Seine Fans freuen sich auf frisches Hopfenaroma,' +
      ' den vollmundigen Antrunk und das geschmeidige Mundgefühl. Rein damit! Ins Regal. Und in die Kühlung.' +
      ' Denn eines kann man auch immer gleich naschen.\n' +
      '\n' +
      'Stammwürze: 12,6 °P Alkoholgehalt: 5,3 % vol'
  },
  {
    id: 2,
    name: 'Ayinger 20 x 0,5l',
    price: 18.54,
    beschreibung: 'Der Klassiker unter den Ayinger Bierspezialitäten - Goldgelbes, untergäriges Bier,\n' +
      'mit leichter malziger Note,\n' +
      'frisch, süffig und mild.'
  },
  {
    id: 3,
    name: 'Augustiner Lagerbier Hell 20 x 0,5l',
    price: 21.49,
    beschreibung: 'Ein besonders mildes, spritziges, lang gelagertes und vor allem erfrischendes Bier.' +
      ' Einmalig in seinem Geschmack, ein Genuss für jeden Bierkenner. Gebraut in einer der ältesten Brauereien' +
      ' Münchens weiß das Augustiner Lagerbier Hell mit einem Alkoholgehalt von 5,2 % Vol. einfach jeden zu' +
      ' überzeugen!" so der Hersteller.'
  },
  {
    id: 4,
    name: 'Versandkosten Schnell',
    price:5.50,
    beschreibung: 'Besoders schneller Versand !.'
  },
  {
    id: 5,
    name: 'Versandkosten Normal',
    price:5.50,
    beschreibung: 'Normaler Versand !.'
  },
  {
    id: 6,
    name: 'Versandkosten Express',
    price:5.50,
    beschreibung: 'Express Versand !.'
  },
];

constructor() {
}

ngOnInit(): void {
}


}
