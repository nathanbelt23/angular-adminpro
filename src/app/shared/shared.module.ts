import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { RouterModule } from '@angular/router';

import { PipesModule } from '../pipes/pipes.module';



@NgModule({
  declarations: [
  
    SidebarComponent,
    HeaderComponent,
    BreadcrumbsComponent,
   

  ],
  imports: [
    CommonModule,
    RouterModule,
    PipesModule
  ],
  exports:[
    SidebarComponent,
    HeaderComponent,
    BreadcrumbsComponent
  ]
})
export class SharedModule { }
