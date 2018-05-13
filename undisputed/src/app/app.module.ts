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
import { WelcomeComponent } from './welcome/welcome.component';
import { FooterComponent } from './footer/footer.component';
import { ImtServiceService } from './Shared/imt-service.service';

const route: Routes =  [
  {path: '', redirectTo: '/welcome', pathMatch: 'full' },
  { path: 'movement', component: IMTComponent },
  { path: 'wod/:showWods', component: WODComponent },
  {path: 'item', component: ImtListItemsComponent},
  {path: 'welcome', component: WelcomeComponent},
  {path: 'wodAdmin', component: WodAdminComponent}
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
    LoginComponent,
    WelcomeComponent,
    FooterComponent],

  imports: [
    BrowserModule,
    RouterModule.forRoot(route),
    FormsModule
  ],
  providers: [ImtServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
