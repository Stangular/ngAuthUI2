import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimaryAdminComponent } from './primary-admin.component';

describe('PrimaryAdminComponent', () => {
  let component: PrimaryAdminComponent;
  let fixture: ComponentFixture<PrimaryAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimaryAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimaryAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
