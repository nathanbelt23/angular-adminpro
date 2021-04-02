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
       
       
      ]},

      {
        titulo: "Otros",
        icono: "mdi mdi-gauge",
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
