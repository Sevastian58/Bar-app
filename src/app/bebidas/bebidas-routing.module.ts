import { BebidasModule } from './bebidas.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import { ByIngredientComponent } from './pages/by-ingredient/by-ingredient.component';
import { ByNameComponent } from './pages/by-name/by-name.component';

const routes: Routes = [
  {
    path: 'bebidas',
    children: [
      { path: 'byIngredient', component: ByIngredientComponent },
      { path: 'byName', component: ByNameComponent },
      // Otras rutas si es necesario
      { path: '', redirectTo: 'byName', pathMatch: 'full' }, // Ruta por defecto
      { path: '**', redirectTo: 'byName' } // Ruta genérica
    ]
  }
];



@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
  ]
})
export class BebidasRoutingModule { }
