import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  constructor() { }

  
  public changeTheme(theme: string) {
   
    try
    {
    const lnkTheme = document.querySelector('#theme');
    let url: string = `assets/css/colors/${theme}.css`;
    lnkTheme?.setAttribute("href", url);
    localStorage.setItem('theme', theme);
   
    this.checkCurrentTheme();
    }
    catch(e)
    {}
  }

  public checkCurrentTheme() {
    let theme = localStorage.getItem('theme') || "purple-dark";
    let lnks = document.querySelectorAll(".selector");
    lnks.forEach(elem => {
      elem.classList.remove("working");
      if(elem.getAttribute("data-theme")==theme )
      {
        elem.classList.add("working");
      }

    });
  }

  public   ThemeDefecto() {


    let theme = localStorage.getItem('theme') || "purple-dark";
    const lnkTheme = document.querySelector('#theme');
    let url: string = `assets/css/colors/${theme}.css`;
    lnkTheme?.setAttribute("href", url);



  }
}
