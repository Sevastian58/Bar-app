import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ByNameComponent } from './pages/by-name/by-name.component';
import { ByIngredientComponent } from './pages/by-ingredient/by-ingredient.component';



@NgModule({
  declarations: [
    ByNameComponent,
    ByIngredientComponent
  ],
  imports: [
    CommonModule
  ]
})
export class BebidasModule { }
