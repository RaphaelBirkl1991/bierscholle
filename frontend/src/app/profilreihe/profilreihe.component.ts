import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-profilreihe',
  templateUrl: './profilreihe.component.html',
  styleUrls: ['./profilreihe.component.css']
})
export class ProfilreiheComponent implements OnInit{
  @Input() name = 'Sepp';
  @Input() img = '../../assets/Bierfahrerkartei/spießer1.png.webp';
  @Input() description = '3 Jahre alt';


  constructor() {
  }

  ngOnInit() {
  }

}
