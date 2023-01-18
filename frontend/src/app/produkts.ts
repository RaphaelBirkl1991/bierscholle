export interface Produkt {
  id: number;
  name: string;
  price: number;
  beschreibung: string;


}

export const produkts = [
  {
    id: 1,
    name: 'Giesinger',
    price: 1.82,
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
    name: 'Augustiner',
    price: 0.89,
    beschreibung: 'Ein besonders mildes, spritziges, lang gelagertes und vor allem erfrischendes Bier. ' +
      'Einmalig in seinem' +
      ' Geschmack, ein Genuss für jeden Bierkenner.'
  },
  {
    id: 3,
    name: 'Ayinger',
    price: 1.60,
    beschreibung: 'Der Klassiker unter den Ayinger Bierspezialitäten - Goldgelbes, untergäriges Bier,\n' +
      'mit leichter malziger Note,\n' +
      'frisch, süffig und mild.'
  },
  {
    id: 4,
    name: 'Augustiner Lagerbier Hell',
    price:1.50,
    beschreibung: 'Ein besonders mildes, spritziges, lang gelagertes und vor allem erfrischendes Bier.' +
      ' Einmalig in seinem Geschmack, ein Genuss für jeden Bierkenner. Gebraut in einer der ältesten Brauereien' +
      ' Münchens weiß das Augustiner Lagerbier Hell mit einem Alkoholgehalt von 5,2 % Vol. einfach jeden zu' +
      ' überzeugen!" so der Hersteller.'
  },
  {
    id: 5,
    name: 'Versandkosten Normal',
    price:5.50,
    beschreibung: 'Besoders schneller Versand !.'
  },
  {
    id: 6,
    name: 'Versandkosten Schneller als normal',
    price:6.50,
    beschreibung: 'Besoders schneller Versand gibt ein Feigling dazu  !.'
  },
  {
    id: 7,
    name: 'Versandkosten Express geht brutal schnell',
    price:7.50,
    beschreibung: 'Express Versand für die Trinkastarken  !.'
  },
];


