import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ByIngredientComponent } from './by-ingredient.component';

describe('ByIngredientComponent', () => {
  let component: ByIngredientComponent;
  let fixture: ComponentFixture<ByIngredientComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ByIngredientComponent]
    });
    fixture = TestBed.createComponent(ByIngredientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
