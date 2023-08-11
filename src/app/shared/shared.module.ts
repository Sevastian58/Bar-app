import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { MainIngredientsComponent } from './components/main-ingredients/main-ingredients.component';
import { MainDescripcionComponent } from './components/main-descripcion/main-descripcion.component';
import { BannerComponent } from './components/banner/banner.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    NavBarComponent,
    MainIngredientsComponent,
    MainDescripcionComponent,
    BannerComponent,
    FooterComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    NavBarComponent,
    MainIngredientsComponent,
    MainDescripcionComponent,
    BannerComponent,
    FooterComponent
  ]
})
export class SharedModule { }
