import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StdTable1Component } from './std-table1.component';

describe('StdTable1Component', () => {
  let component: StdTable1Component;
  let fixture: ComponentFixture<StdTable1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StdTable1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StdTable1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
