import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainDescripcionComponent } from './main-descripcion.component';

describe('MainDescripcionComponent', () => {
  let component: MainDescripcionComponent;
  let fixture: ComponentFixture<MainDescripcionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainDescripcionComponent]
    });
    fixture = TestBed.createComponent(MainDescripcionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
