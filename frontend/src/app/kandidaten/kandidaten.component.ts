import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-kandidaten',
  templateUrl: './kandidaten.component.html',
  styleUrls: ['./kandidaten.component.css']
})
export class KandidatenComponent implements OnInit{

  names = ['Sepp','Armin','Sabine','Michael','Hubert'];
  texts = ['2 Jahre alt','Blablabla','blub bldfdub','bla blaa','Text 345'];
  images =
    ['../../assets/Bierfahrerkartei/fahrer1.png.webp',
      '../../assets/Bierfahrerkartei/spießer1.png.webp',
      '../../assets/Bierfahrerkartei/fahrer3.png.webp',
      '../../assets/Bierfahrerkartei/fahrer4.png.webp',
      '../../assets/Bierfahrerkartei/fahrer5.png.webp'];


  constructor() {
  }

  ngOnInit() {
  }

}
