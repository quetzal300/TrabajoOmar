import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioImagenComponent } from './inicio-imagen.component';

describe('InicioImagenComponent', () => {
  let component: InicioImagenComponent;
  let fixture: ComponentFixture<InicioImagenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InicioImagenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InicioImagenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
