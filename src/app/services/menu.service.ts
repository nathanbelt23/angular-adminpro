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
        },
        {
          titulo: "Main",
          url: '/'
        },
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
   }
  ];
  constructor() { }
  public getMenu() {
    return this.menu;
  }


}
