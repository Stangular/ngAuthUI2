import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserWaitingConfirmationComponent } from './user-waiting-confirmation.component';

describe('UserWaitingConfirmationComponent', () => {
  let component: UserWaitingConfirmationComponent;
  let fixture: ComponentFixture<UserWaitingConfirmationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserWaitingConfirmationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserWaitingConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
