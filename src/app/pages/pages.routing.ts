import { Routes, RouterModule } from '@angular/router';
import { NgModule, Component } from '@angular/core';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { PagesComponent } from './pages.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { PerfilComponent } from './perfil/perfil.component';
import { UsuariosComponent } from './mantenimientos/usuarios/usuarios.component';
import { MedicosComponent } from './mantenimientos/medicos/medicos.component';
import { HospitalesComponent } from './mantenimientos/hospitales/hospitales.component';



const routes: Routes = [

  {
    path: 'dashboard',
    component: PagesComponent
    , children: [
      { path: '', component: DashboardComponent , data:{titulo:"dashboard"}},
      { path: 'ajustes', component: AccountSettingsComponent  , data:{titulo:"ajustes"}},
      { path: 'grafica1', component: Grafica1Component , data:{titulo:"grafica1"}},
      { path: 'perfil',component:PerfilComponent, data:{titulo: "perfil"}},
      { path: 'progress', component: ProgressComponent , data:{titulo:"progress"}},
      { path: 'promesas', component: PromesasComponent, data:{titulo:"promesas"} },
      { path: 'rxjs', component: RxjsComponent , data:{titulo:"rxjs"} },

      //  mantenimientos

      {path:"hospitales" , component:HospitalesComponent, data:{titulo:"Mantenimiento de medicos"}},
      {path:"medicos" , component:MedicosComponent, data:{titulo:"Mantenimiento de medicos"}},
      {path:"usuarios" , component:UsuariosComponent, data:{titulo:"Usuarios de la aplicacion"}},
    ]
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRouting { }
