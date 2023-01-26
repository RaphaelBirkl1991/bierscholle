import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailBestaetigungComponent } from './email-bestaetigung.component';

describe('EmailBestaetigungComponent', () => {
  let component: EmailBestaetigungComponent;
  let fixture: ComponentFixture<EmailBestaetigungComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmailBestaetigungComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmailBestaetigungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
