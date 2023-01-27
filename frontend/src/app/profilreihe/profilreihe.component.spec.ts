import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilreiheComponent } from './profilreihe.component';

describe('ProfilreiheComponent', () => {
  let component: ProfilreiheComponent;
  let fixture: ComponentFixture<ProfilreiheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilreiheComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfilreiheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
