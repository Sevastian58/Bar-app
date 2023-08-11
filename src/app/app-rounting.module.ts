import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuRoutingModule } from './menu/menu-routing.module';


const routes: Routes = [
  {
    path: 'menu',
    loadChildren: () => import('./menu/menu.module').then(modulo => modulo.MenuModule)
  },
  {
    path: 'bebidas',
    loadChildren: () => import('./bebidas/bebidas.module').then(modulo => modulo.BebidasModule)
  },
  {
    path: '', // Ruta por defecto, cargar componente o página de inicio si es necesario
    pathMatch: 'full', // Asegura que solo coincida con la ruta vacía
    redirectTo: 'menu' // Redirigir a 'menu' por defecto
  },
  {
    path: '**',
    redirectTo: 'menu' // Redirigir rutas desconocidas a 'menu'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    MenuRoutingModule
  ],
  exports: [
    RouterModule
  ]
})
export class AppRountingModule { }
