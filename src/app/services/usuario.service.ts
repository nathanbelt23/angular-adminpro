import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';


import { Usuario, RespuestaUsuario } from '../model/usuario.model';
import { environment } from '../../environments/environment';
import { delay, tap } from 'rxjs/operators';

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
  public actualizarUsuarioClase(usuario: Usuario, id: string) {

    this.token = localStorage.getItem("token") || "";
    let headersToken = {
    "x-token": this.token
    };
    return this.httpClient.put<RespuestaUsuario>(`${urlBase}/usuarios/${id}`, usuario, {
      headers: headersToken } );
  
  }


  public actualizarUsuario(formData: FormData, id: string) {

    this.token = localStorage.getItem("token") || "";
    let headersToken = {

      "x-token": this.token
    };

    return this.httpClient.put<RespuestaUsuario>(`${urlBase}/usuarios/${id}`, formData, {
      headers: headersToken
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
  public listadoUsuarios(desde: number) {
    const params = new HttpParams()
      .set('desde', desde.toString())

    const headersToken = {

      "x-token": this.getToken()
    };
    const url: string = `${urlBase}/usuarios/${desde}`;
    return this.httpClient.get<RespuestaUsuario>(url, { headers: headersToken }).pipe(delay(100));
  }

  public getToken() {
    return localStorage.getItem("token") || "";
  }


  public eliminarUsuario(id:string)
  {
    const url =`${urlBase}/usuarios/${id}`;
    const headersParam= {
        "x-token":this.getToken()

    };

   return this.httpClient.delete(url, {headers:headersParam});

  }


  public cambiarRole(usuario:Usuario)
  {


  }


}

