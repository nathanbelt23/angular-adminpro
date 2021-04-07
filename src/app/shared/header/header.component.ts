import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../../model/usuario.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  usuario= new Usuario();
  usuarioPer = new Usuario();
  constructor(public usuarioService: UsuarioService) {
    if (this.usuarioService.usuario.nombre=="")
    {
      if (localStorage.getItem("usuario")) {
        let strUsuario: string = localStorage.getItem("usuario")?.toString() || '';
        this.usuarioService.usuario = JSON.parse(strUsuario);
      }
    }

  }

  ngOnInit(): void {


  }

}
