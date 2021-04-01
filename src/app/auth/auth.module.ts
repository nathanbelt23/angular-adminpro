import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';



@NgModule({
  declarations: [LoginComponent, RegisterComponent],
  imports: [
   RouterModule,
  ]
  , exports: [
    RouterModule,
    LoginComponent, 
    RegisterComponent]
  
})
export class AuthModule { }
