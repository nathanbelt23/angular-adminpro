import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuarioService } from './usuario.service';
import { RespuestaUsuario } from '../model/usuario.model';
import { environment } from '../../environments/environment.prod';
const baseUrl =environment.urlBase;
@Injectable({
  providedIn: 'root'
})
export class BusquedasService {

  constructor(private httpClient: HttpClient  , private usuarioService: UsuarioService) { }


  public  listadoUsuariosxTermino(termino:string) {
    
     let  url=`${baseUrl}/todo/coleccion/usuarios/${termino}`;
     return  this.httpClient.get<RespuestaUsuario>(url,{headers:{
        "x-token": this.usuarioService.getToken()
     }});
  }
}
