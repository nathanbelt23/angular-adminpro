import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


import { Usuario, RespuestaUsuario } from '../model/usuario.model';
import { environment } from '../../environments/environment';
import { tap } from 'rxjs/operators';

const urlBase = environment.urlBase;
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  constructor(public httpClient: HttpClient) { }

  public usuario = new Usuario("", false, "", "", "");
  token: string = "";
  public crearUsuario(nombre: string, password: string, email: string) {
    let parametros = {
      nombre,
      password,
      email
    };
    return this.httpClient.post(`${urlBase}/usuarios`, parametros);
  }

  public login(password: string, email: string) {
    let parametros = {
      password,
      email
    };
    return this.httpClient.post(`${urlBase}/login`, parametros);
  }

  public loginDatosForm(formData: FormData) {

    return this.httpClient.post<RespuestaUsuario>(`${urlBase}/login`, formData).
      pipe(tap(p => {
        this.usuario = p.usuario || new Usuario();
        localStorage.setItem("usuario", JSON.stringify(this.usuario));
      }
      ));
  }

  //login/google
  public loginGoogle(token: string) {
    let parametros = {
      token
    };
    return this.httpClient.post<RespuestaUsuario>(`${urlBase}/login/google`, parametros)
      .pipe(tap(p => {
        this.usuario = p.usuario || new Usuario();
        localStorage.setItem("usuario", JSON.stringify(this.usuario));
      }
      )
      )

      ;
  }

  public actualizarUsuario(formData: FormData, id: string) {
   
    this.token = localStorage.getItem("token") || "";
    let headersToken = {

      "x-token": this.token
    };

    return this.httpClient.put<RespuestaUsuario>(`${urlBase}/usuarios/${id}`, formData, {
      headers:headersToken
     }
    )
      .pipe(tap(p => {
        this.usuario = p.usuario || new Usuario();
        localStorage.setItem("usuario", JSON.stringify(this.usuario));
      }
      )
      )

      ;
  }


  public getToken()
  {
    return localStorage.getItem("token") || "";
  }

  /*localhost:3000/api/usuarios/*/

}

