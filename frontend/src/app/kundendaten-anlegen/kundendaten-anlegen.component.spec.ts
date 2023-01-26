import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KundendatenAnlegenComponent } from './kundendaten-anlegen.component';

describe('RegistrierenComponent', () => {
  let component: KundendatenAnlegenComponent;
  let fixture: ComponentFixture<KundendatenAnlegenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KundendatenAnlegenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KundendatenAnlegenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
