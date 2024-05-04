import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import {HttpClientModule} from '@angular/common/http';
import { DashboardFormationComponent } from './dashboard-formation/dashboard-formation.component';
import { Login2Component } from './login2/login2.component';


@NgModule({
  declarations: [
    AppComponent,
    NotfoundComponent,
    NavbarComponent,
    LoginComponent,
    DashboardComponent,
    HomeComponent,
    DashboardFormationComponent,
    Login2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
