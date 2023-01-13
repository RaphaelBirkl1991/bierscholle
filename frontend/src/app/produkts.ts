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
    beschreibung: 'Mittlerweile wohl eines der beliebtesten Biere Münchens.'
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
  }
];


