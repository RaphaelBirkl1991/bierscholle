import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BierBayernComponent } from './bier-bayern.component';

describe('BierBayernComponent', () => {
  let component: BierBayernComponent;
  let fixture: ComponentFixture<BierBayernComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BierBayernComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BierBayernComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
