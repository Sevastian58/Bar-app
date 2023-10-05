import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ByNameComponent } from './pages/by-name/by-name.component';
import { ByIngredientComponent } from './pages/by-ingredient/by-ingredient.component';
import { BebidasRoutingModule } from './bebidas-routing.module';
import { SharedModule } from '../shared/shared.module';
import { DrinksComponent } from './components/drinks/drinks.component';
import { BebidaComponent } from './pages/bebida/bebida.component';
import { AboutMeComponent } from '../about-me/components/about-me/about-me.component';



@NgModule({
  declarations: [
    ByNameComponent,
    ByIngredientComponent,
    DrinksComponent,
    BebidaComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    BebidasRoutingModule
  ]
})
export class BebidasModule { }
