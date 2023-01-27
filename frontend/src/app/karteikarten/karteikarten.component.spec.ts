import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KarteikartenComponent } from './karteikarten.component';

describe('KarteikartenComponent', () => {
  let component: KarteikartenComponent;
  let fixture: ComponentFixture<KarteikartenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KarteikartenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KarteikartenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
