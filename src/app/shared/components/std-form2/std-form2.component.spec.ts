import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StdForm2Component } from './std-form2.component';

describe('StdForm2Component', () => {
  let component: StdForm2Component;
  let fixture: ComponentFixture<StdForm2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StdForm2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StdForm2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
