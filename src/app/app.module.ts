import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from "@angular/common/http";

import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { ComunidadModule } from './proyecto/comunidad.module';

import { AppComponent } from './app.component';
import { EstadoPipe } from './estado.pipe';



@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule,
    ComunidadModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
