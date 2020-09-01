import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Secion1Component } from './secion1.component';

describe('Secion1Component', () => {
  let component: Secion1Component;
  let fixture: ComponentFixture<Secion1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Secion1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Secion1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
