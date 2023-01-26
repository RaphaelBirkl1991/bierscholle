import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeuefahrerComponent } from './neuefahrer.component';

describe('NeuefahrerComponent', () => {
  let component: NeuefahrerComponent;
  let fixture: ComponentFixture<NeuefahrerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NeuefahrerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NeuefahrerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
