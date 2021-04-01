import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { PagesRouting } from './pages/pages.routing';
import { AuthRouting } from './auth/auth.routing';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '**', component: NopagefoundComponent },
];



@NgModule({
  imports: [
    RouterModule.forRoot(routes)
    , PagesRouting
    , AuthRouting
  ],

  exports: [RouterModule]
})
export class AppRoutingModule { }
