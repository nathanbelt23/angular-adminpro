import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { NopagefoundComponent } from './nopagefound/nopagefound.component';

import { PagesModule } from './pages/pages.module';
import { SharedModule } from './shared/shared.module';
import { AuthModule } from './auth/auth.module';



@NgModule({
  declarations: [
    AppComponent,
    NopagefoundComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,

    PagesModule,
    SharedModule,
    AuthModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
