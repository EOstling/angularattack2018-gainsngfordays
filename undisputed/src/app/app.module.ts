import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
<<<<<<< HEAD
import { WODComponent } from './wod/wod.component';
=======
import { IMTComponent } from './imt/imt.component';
import { NavComponent } from './nav/nav.component';
>>>>>>> 8f5241fa982e52f9121613fbcf213ba1955e1278

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    WODComponent
=======
    IMTComponent,
    NavComponent
>>>>>>> 8f5241fa982e52f9121613fbcf213ba1955e1278
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
