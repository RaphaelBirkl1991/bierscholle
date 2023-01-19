import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduktBeschreibungComponent } from './produkt-beschreibung.component';

describe('ProduktBeschreibungComponent', () => {
  let component: ProduktBeschreibungComponent;
  let fixture: ComponentFixture<ProduktBeschreibungComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProduktBeschreibungComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProduktBeschreibungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
