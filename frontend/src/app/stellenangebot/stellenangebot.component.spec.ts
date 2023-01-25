import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StellenangebotComponent } from './stellenangebot.component';

describe('StellenangebotComponent', () => {
  let component: StellenangebotComponent;
  let fixture: ComponentFixture<StellenangebotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StellenangebotComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StellenangebotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
