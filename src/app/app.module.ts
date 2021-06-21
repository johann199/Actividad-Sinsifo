import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {ContadorComponent} from './contador.component';
import { DcModule } from './dc/dc.module';
import { ContadorModule } from './heroe/contador/contador.module';
//import {HeroeComponent} from './heroe/heroe.component';
import { HeroeModule } from './heroe/heroe.module';
//import {ListadoComponent} from './heroe/listado/listado.component';
@NgModule({
  declarations: [
    AppComponent,
   // ContadorComponent,
    //HeroeComponent,
    //ListadoComponent
  ],
  imports: [
    BrowserModule,
    HeroeModule,
    ContadorModule,
    DcModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
