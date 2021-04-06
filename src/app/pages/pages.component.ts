import {  OnInit } from '@angular/core';
import { ThemeService } from '../services/theme.service';
import {Component} from '@angular/core';
import { Usuario } from '../model/usuario.model';
import { UsuarioService } from '../services/usuario.service';

declare var customInitFunctions: Function;


@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {

  anoActual:number;
  constructor(public  themeService:ThemeService,  
    public  usuarioService: UsuarioService
    
    ) { 
        this.anoActual = 2021;
/*
        try
        {
    if (usuarioService.usuario.nombre=="")
    {
      
      if (localStorage.getItem("usuario")) {
  
        let strUsuario: string = localStorage.getItem("usuario")?.toString() || '';
        usuarioService.usuario = JSON.parse(strUsuario);
       //console.error(this.usuarioPer);
      }

    }
  }
  catch(error)
  {
      console.error(error);

  }*/


    }


  ngOnInit(): void {
    this.themeService.ThemeDefecto();
   try {
    customInitFunctions();
 
   } catch (error) {
     console.error(error);
   }
  }


}
