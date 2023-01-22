import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchlussseiteComponent } from './schlussseite.component';

describe('SchlussseiteComponent', () => {
  let component: SchlussseiteComponent;
  let fixture: ComponentFixture<SchlussseiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchlussseiteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SchlussseiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
