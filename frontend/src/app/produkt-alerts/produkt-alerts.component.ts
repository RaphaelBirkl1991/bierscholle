import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Produkt} from "../produkts";

@Component({
  selector: 'app-produkt-alerts',
  templateUrl: './produkt-alerts.component.html',
  styleUrls: ['./produkt-alerts.component.css']
})
export class ProduktAlertsComponent {
  @Input() produkt!: Produkt | undefined;
  @Output() notify = new EventEmitter();

}
