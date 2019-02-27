import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldUtilityComponent } from './field-utility.component';

describe('FieldUtilityComponent', () => {
  let component: FieldUtilityComponent;
  let fixture: ComponentFixture<FieldUtilityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FieldUtilityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldUtilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
