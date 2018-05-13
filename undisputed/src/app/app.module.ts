import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { WODComponent } from './wod/wod.component';
import { IMTComponent } from './imt/imt.component';
import { NavComponent } from './nav/nav.component';
import { RouterModule, Routes } from '@angular/router';
import { WodAdminComponent } from './wod-admin/wod-admin.component';
import { ImtListItemsComponent } from './imt/imt-list-items/imt-list-items.component';
import { FormsModule } from '@angular/forms';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';




const route: Routes =  [
  { path: 'movement', component: IMTComponent },
  { path: 'wod', component: WODComponent },
  {path: 'item', component: ImtListItemsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    WODComponent,
    NavComponent,
    IMTComponent,
    WodAdminComponent,
    ImtListItemsComponent,
    SignupComponent,
    LoginComponent],

  imports: [
    BrowserModule,
    RouterModule.forRoot(route),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
