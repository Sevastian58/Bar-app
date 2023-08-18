import { BebidasModule } from './bebidas.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import { ByIngredientComponent } from './pages/by-ingredient/by-ingredient.component';
import { ByNameComponent } from './pages/by-name/by-name.component';
import { BebidaComponent } from './pages/bebida/bebida.component';

const routes: Routes = [
  {
    path: 'bebidas',
    children: [
      { path: 'byIngredient', component: ByIngredientComponent },
      { path: 'byIngredient/:name', component: ByIngredientComponent },
      { path: 'byName', component: ByNameComponent },
      { path: 'bebida', component: BebidaComponent },
      { path: 'bebida/:id', component: BebidaComponent },
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
  ],
  exports:[
    RouterModule
  ]
})
export class BebidasRoutingModule { }
