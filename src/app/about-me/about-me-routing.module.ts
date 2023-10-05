import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './components/about-me/about-me.component';

const routes:Routes=[
  {
    path:'aboutMe',
    children:[
      {path:'principal', component:AboutMeComponent},
      {path:'**', redirectTo:'principal'}
    ] // Cargar PrincipalComponent directamente
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutMeRoutingModule { }
