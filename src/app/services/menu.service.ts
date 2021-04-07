import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  menu: any = [
    {
      titulo: "Dashboard",
      icono: "mdi mdi-gauge",
      subMenu: [
        {
          titulo: "Graficas",
          url: 'grafica1'
        },
        {
          titulo: "Progress bar",
          url: 'progress'
        }
        ,
        {
          titulo:"Promesas",
          url: 'promesas'
        },
        {
          titulo:"Rxjs",
          url: 'rxjs'
        }
        
        
      ]}
,
      {
        titulo: "Mantenimientos",
        icono: "mdi mdi-account",
        subMenu: [
          {
            titulo: "Medicos",
            url: 'medicos'
          },
          {
            titulo: "Hospitales",
            url: 'hospitales'
          }
          ,
          {
            titulo: "Usuarios",
            url: 'usuarios'
          }
        ]
   },
   {
    titulo: "Otros",
    icono: "mdi-engine",
    subMenu: [
      {
        titulo: "Ajustes",
        url: 'ajustes'
      },
    ]
},


   
  ];
  constructor() { }
  public getMenu() {
    return this.menu;
  }


}
