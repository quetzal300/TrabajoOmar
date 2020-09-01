import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioIzquierdaComponent } from './inicio-izquierda.component';

describe('InicioIzquierdaComponent', () => {
  let component: InicioIzquierdaComponent;
  let fixture: ComponentFixture<InicioIzquierdaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InicioIzquierdaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InicioIzquierdaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
