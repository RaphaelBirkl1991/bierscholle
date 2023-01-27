import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KaufAbschliessenComponent } from './kauf-abschliessen.component';

describe('KaufAbschliessenComponent', () => {
  let component: KaufAbschliessenComponent;
  let fixture: ComponentFixture<KaufAbschliessenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KaufAbschliessenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KaufAbschliessenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
