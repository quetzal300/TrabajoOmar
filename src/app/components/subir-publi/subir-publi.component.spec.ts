import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubirPubliComponent } from './subir-publi.component';

describe('SubirPubliComponent', () => {
  let component: SubirPubliComponent;
  let fixture: ComponentFixture<SubirPubliComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubirPubliComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubirPubliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
