import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduktAlertsComponent } from './produkt-alerts.component';

describe('ProduktAlertsComponent', () => {
  let component: ProduktAlertsComponent;
  let fixture: ComponentFixture<ProduktAlertsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProduktAlertsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProduktAlertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
