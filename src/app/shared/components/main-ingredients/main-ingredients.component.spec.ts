import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainIngredientsComponent } from './main-ingredients.component';

describe('MainIngredientsComponent', () => {
  let component: MainIngredientsComponent;
  let fixture: ComponentFixture<MainIngredientsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainIngredientsComponent]
    });
    fixture = TestBed.createComponent(MainIngredientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
