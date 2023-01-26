import { Component } from '@angular/core';

@Component({
  selector: 'app-karteikarten',
  templateUrl: './karteikarten.component.html',
  styleUrls: ['./karteikarten.component.css']
})
export class KarteikartenComponent {

  Biertexte = [

    'text 1',
    'text 2',
    'text 3',
    'text 4',
    'text 5',

  ];

  BierBilder = [
    '../../assets/Bierfahrerkartei/fahrer1.png.webp',
    '../../assets/Bierfahrerkartei/fahrer2png.webp',
    '../../assets/Bierfahrerkartei/fahrer3.png.webp',
    '../../assets/Bierfahrerkartei/fahrer4.png.webp',
    '../../assets/Bierfahrerkartei/fahrer5.png.webp',

  ];

}
