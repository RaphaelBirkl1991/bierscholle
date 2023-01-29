import {Component, Input, OnInit} from '@angular/core';
import {FahrerService} from "../fahrer.service";

@Component({
  selector: 'app-profilreihe',
  templateUrl: './profilreihe.component.html',
  styleUrls: ['./profilreihe.component.css']
})
export class ProfilreiheComponent implements OnInit{
  @Input() name = 'Herr Dr. Biermeier';
  @Input() img = '../../assets/Bierfahrerkartei/Personalchef.png.webp';
  @Input() description = 'Bier ist sein Leben';
  @Input() keineFahrer = true; // Standartmäßig auf True wenn kein Fahrer gemeldet ist


  constructor(public fs:FahrerService) {
  }

  ngOnInit() {
  }

}
