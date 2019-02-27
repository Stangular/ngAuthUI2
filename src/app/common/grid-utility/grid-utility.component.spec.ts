import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridUtilityComponent } from './grid-utility.component';

describe('GridUtilityComponent', () => {
  let component: GridUtilityComponent;
  let fixture: ComponentFixture<GridUtilityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridUtilityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridUtilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
