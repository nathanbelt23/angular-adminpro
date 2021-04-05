import { NgModule } from '@angular/core';

import {  RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';



@NgModule({
  declarations: [LoginComponent, RegisterComponent],
  imports: [
   RouterModule,
   FormsModule,
   ReactiveFormsModule,
   CommonModule,
   BrowserAnimationsModule,
   
  ]
  , exports: [
    RouterModule,
    LoginComponent, 
    RegisterComponent

  ]
  
})
export class AuthModule { }
