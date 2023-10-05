import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';

const routes:Routes=[
  {
    path:'contact',
    children:[
      {path:'principal', component:ContactComponent},
      {path:'**', redirectTo:'principal'}
    ] // Cargar PrincipalComponent directamente
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactRoutingModule { }
