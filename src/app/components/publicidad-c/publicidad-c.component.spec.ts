import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicidadCComponent } from './publicidad-c.component';

describe('PublicidadCComponent', () => {
  let component: PublicidadCComponent;
  let fixture: ComponentFixture<PublicidadCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicidadCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicidadCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
