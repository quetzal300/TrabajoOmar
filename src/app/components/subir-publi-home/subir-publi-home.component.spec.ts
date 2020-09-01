import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubirPubliHomeComponent } from './subir-publi-home.component';

describe('SubirPubliHomeComponent', () => {
  let component: SubirPubliHomeComponent;
  let fixture: ComponentFixture<SubirPubliHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubirPubliHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubirPubliHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
