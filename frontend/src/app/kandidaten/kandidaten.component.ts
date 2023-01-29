import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-kandidaten',
  templateUrl: './kandidaten.component.html',
  styleUrls: ['./kandidaten.component.css']
})
export class KandidatenComponent implements OnInit{

  names =
    ['Sepp ',
      'Aal-Anton'
      , 'Ulla'
      , 'BWL-Justus'
      , 'Kevin'
      , 'Hans-Albers'
      , 'Klaus'];
  texts =
    ['Ihm kommt nur Weißbier ins Haus!',
    'Legt bei jeder Bestellung noch einen Aal dazu!',
    'Verschüttet niemals ihr Bier!',
    'Seine Papa ist Anwalt.'
    , 'Ist halt son richtiger Kevin',
    "Isst sein Fischbrötchen an der Waterkant",
      'Dreht gerne Sicherheitsvideos bei der Arbeit'

    ];
  images =
    ['../../assets/Bierfahrerkartei/fahrer2png.webp',
      '../../assets/Bierfahrerkartei/fahrer4.png.webp',
      '../../assets/Bierfahrerkartei/fahrer5.png.webp',
      '../../assets/Bierfahrerkartei/spießer1.png.webp',
      '../../assets/Bierfahrerkartei/spießer3.png.webp',
      '../../assets/Bierfahrerkartei/fahrer10.png.webp',
      '../../assets/Bierfahrerkartei/Klaus.jpg',

    ];


  constructor() {
  }

  ngOnInit() {
  }

}
