import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { ItemCardComponent } from './item-card/item-card.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { PaymentWindowComponent } from './payment-window/payment-window.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { applicationRoutes } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import { UpdatepasswordComponent } from './updatepassword/updatepassword.component';
import { AdditemsComponent } from './additems/additems.component';
import { ViewitemsComponent } from './viewitems/viewitems.component'

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    ItemCardComponent,
    AdminLoginComponent,
    AdminPageComponent,
    PaymentWindowComponent,
    HomeComponent,
    UpdatepasswordComponent,
    AdditemsComponent,
    ViewitemsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(applicationRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
