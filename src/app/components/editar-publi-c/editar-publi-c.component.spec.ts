import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarPubliCComponent } from './editar-publi-c.component';

describe('EditarPubliCComponent', () => {
  let component: EditarPubliCComponent;
  let fixture: ComponentFixture<EditarPubliCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarPubliCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarPubliCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
