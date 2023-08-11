import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { PrincipalComponent } from './components/principal/principal.component';





@NgModule({
  declarations: [
    PrincipalComponent
  ],
  imports: [
    SharedModule,
    CommonModule
  ]
})
export class MenuModule { }
