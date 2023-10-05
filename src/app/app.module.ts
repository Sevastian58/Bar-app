import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BebidasModule } from './bebidas/bebidas.module';
import { SharedModule } from './shared/shared.module';
import { MenuModule } from './menu/menu.module';
import { AppRountingModule } from './app-rounting.module';
import { AboutMeModule } from './about-me/about-me.module';
import { ContactComponent } from './contact/components/contact/contact.component';
import { ContactModule } from './contact/contact.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BebidasModule,
    SharedModule,
    MenuModule,
    AboutMeModule,
    ContactModule,
    HttpClientModule,
    AppRountingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
