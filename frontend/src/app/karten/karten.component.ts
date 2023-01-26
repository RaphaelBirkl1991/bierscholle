import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-karten',
  templateUrl: './karten.component.html',
  styleUrls: ['./karten.component.css']
})
export class KartenComponent implements OnInit{

  @Input() text: string ='';   // Strings von "außen reingeben"
  @Input() bilder:  string ='';

  constructor() {
  }
  ngOnInit() {
  }

}
