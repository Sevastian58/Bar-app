import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { MainIngredientsComponent } from './components/main-ingredients/main-ingredients.component';
import { MainDescripcionComponent } from './components/main-descripcion/main-descripcion.component';
import { BannerComponent } from './components/banner/banner.component';
import { FooterComponent } from './components/footer/footer.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    NavBarComponent,
    MainIngredientsComponent,
    MainDescripcionComponent,
    BannerComponent,
    FooterComponent,
    SearchBoxComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot([])
  ],
  exports:[
    NavBarComponent,
    MainIngredientsComponent,
    MainDescripcionComponent,
    BannerComponent,
    FooterComponent,
    SearchBoxComponent
  ]
})
export class SharedModule { }
