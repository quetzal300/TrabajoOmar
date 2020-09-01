import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarPubliHomeComponent } from './editar-publi-home.component';

describe('EditarPubliHomeComponent', () => {
  let component: EditarPubliHomeComponent;
  let fixture: ComponentFixture<EditarPubliHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarPubliHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarPubliHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
