import { Component } from '@angular/core';

@Component({
  selector: 'app-karteikarten',
  templateUrl: './karteikarten.component.html',
  styleUrls: ['./karteikarten.component.css']
})
export class KarteikartenComponent {

  Biertexte = [

    'Der Sepp, Bierfahrer seit 2001. Erst 8 Auffahrunfälle. Kommt immer öfter pünktlich mittlerweile. Hat immer einen ' +
    'Stammplatz im Löwenbräuzelt auf dem Oktoberfest. Also einer unserer Besten. ',
    'Der Heino liebt sein Astra und isst dazu auch gerne Labskaus.Gibt seinen Lohn meist nach ein paar' +
    'Tagen auf der Reeperbahn aus, das macht ihn ziemlich fleissig. ',


  ];

  BierBilder = [
    '../../assets/Bierfahrerkartei/fahrer1.png.webp',
    '../../assets/Bierfahrerkartei/fahrer3.png.webp',



  ];

}
