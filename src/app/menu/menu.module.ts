import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { PrincipalComponent } from './components/principal/principal.component';
import { MenuRoutingModule } from './menu-routing.module';





@NgModule({
  declarations: [
    PrincipalComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    MenuRoutingModule
  ]
})
export class MenuModule { }
