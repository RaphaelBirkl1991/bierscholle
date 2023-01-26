import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KaufBestaetigungComponent } from './kauf-bestaetigung.component';

describe('KaufBestaetigungComponent', () => {
  let component: KaufBestaetigungComponent;
  let fixture: ComponentFixture<KaufBestaetigungComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KaufBestaetigungComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KaufBestaetigungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
