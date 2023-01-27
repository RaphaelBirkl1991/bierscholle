import {Component, OnInit} from '@angular/core';
import {FahrerService} from "../fahrer.service";

@Component({
  selector: 'app-neuefahrer',
  templateUrl: './neuefahrer.component.html',
  styleUrls: ['./neuefahrer.component.css']
})
export class NeuefahrerComponent implements OnInit{



  constructor(public fs: FahrerService) {
  }

  ngOnInit() {
  }

}
