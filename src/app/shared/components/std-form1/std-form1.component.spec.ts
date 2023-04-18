import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StdForm1Component } from './std-form1.component';

describe('StdForm1Component', () => {
  let component: StdForm1Component;
  let fixture: ComponentFixture<StdForm1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StdForm1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StdForm1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
