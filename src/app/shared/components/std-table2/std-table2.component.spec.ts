import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StdTable2Component } from './std-table2.component';

describe('StdTable2Component', () => {
  let component: StdTable2Component;
  let fixture: ComponentFixture<StdTable2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StdTable2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StdTable2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
