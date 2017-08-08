import {NgModule}      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }  from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HomeComponent }  from './home.component';
import { PageNotFoundComponent } from './page-not-found.component';

import { DocModule } from './doctor/doc.module';
import { AuthModule } from './auth/auth.module';
import { SecurityBypass } from './pipes/security-bypass.pipe';
import { HttpModule } from '@angular/http';
import { UserModule } from './patient/user.module';
import { RxModule } from './rx/rx.module';

@NgModule({
  imports:      [ BrowserModule, FormsModule, AuthModule, HttpModule, DocModule, UserModule, RxModule,
    AppRoutingModule, ],
  declarations: [ AppComponent, PageNotFoundComponent, HomeComponent, SecurityBypass],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
