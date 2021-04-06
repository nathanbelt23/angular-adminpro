import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/model/usuario.model';
import { UsuarioService } from 'src/app/services/usuario.service';
import { MenuService } from '../../services/menu.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  public menu: any = [];
  usuario:Usuario;

  
  constructor(public menuService: MenuService,public usuarioService: UsuarioService) { 
    this.usuario=  usuarioService.usuario;
    
    if (this.usuarioService.usuario.nombre=="")
    {
      
      if (localStorage.getItem("usuario")) {
  
        let strUsuario: string = localStorage.getItem("usuario")?.toString() || '';
        this.usuarioService.usuario = JSON.parse(strUsuario);
        ///this.usuario=  usuarioService.usuario;
      }
    }


    this.menu = this.menuService.getMenu();
  }
  ngOnInit(): void {
  }

}
