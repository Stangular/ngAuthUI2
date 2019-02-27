import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondaryAdminComponent } from './secondary-admin.component';

describe('SecondaryAdminComponent', () => {
  let component: SecondaryAdminComponent;
  let fixture: ComponentFixture<SecondaryAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondaryAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondaryAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
