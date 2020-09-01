import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubirPublicasionCategoriaComponent } from './subir-publicasion-categoria.component';

describe('SubirPublicasionCategoriaComponent', () => {
  let component: SubirPublicasionCategoriaComponent;
  let fixture: ComponentFixture<SubirPublicasionCategoriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubirPublicasionCategoriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubirPublicasionCategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
