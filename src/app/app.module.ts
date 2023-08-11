import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BebidasModule } from './bebidas/bebidas.module';
import { SharedModule } from './shared/shared.module';
import { MenuModule } from './menu/menu.module';
import { AppRountingModule } from './app-rounting.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BebidasModule,
    SharedModule,
    MenuModule,
    HttpClientModule,
    AppRountingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
