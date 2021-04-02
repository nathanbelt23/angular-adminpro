import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [LoginComponent, RegisterComponent],
  imports: [
   RouterModule,
   FormsModule,
   ReactiveFormsModule
  ]
  , exports: [
    RouterModule,
    LoginComponent, 
    RegisterComponent
  ]
  
})
export class AuthModule { }
