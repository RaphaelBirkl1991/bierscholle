import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BierHamburgComponent } from './bier-hamburg.component';

describe('BierHamburgComponent', () => {
  let component: BierHamburgComponent;
  let fixture: ComponentFixture<BierHamburgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BierHamburgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BierHamburgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
