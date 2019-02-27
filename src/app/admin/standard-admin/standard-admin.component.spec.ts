import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StandardAdminComponent } from './standard-admin.component';

describe('StandardAdminComponent', () => {
  let component: StandardAdminComponent;
  let fixture: ComponentFixture<StandardAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StandardAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StandardAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
