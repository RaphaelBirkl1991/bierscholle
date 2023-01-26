import {Component, Input, OnInit} from '@angular/core';
import {FahrerService} from "../fahrer.service";

@Component({
  selector: 'app-profilreihe',
  templateUrl: './profilreihe.component.html',
  styleUrls: ['./profilreihe.component.css']
})
export class ProfilreiheComponent implements OnInit{
  @Input() name = 'Sepp';
  @Input() img = '../../assets/Bierfahrerkartei/spießer1.png.webp';
  @Input() description = '3 Jahre alt';
  @Input() keineFahrer = true; // Standartmäßig auf True wenn kein Fahrer gemeldet ist


  constructor(public fs:FahrerService) {
  }

  ngOnInit() {
  }

}
