import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './components/principal/principal.component';


const routes:Routes=[
  {
    path:'menu',
    children:[
      {path:'principal', component:PrincipalComponent},
      {path:'**', redirectTo:'principal'}
    ] // Cargar PrincipalComponent directamente
  }
]


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
  ], exports:[
    RouterModule
  ]
})
export class MenuRoutingModule { }
