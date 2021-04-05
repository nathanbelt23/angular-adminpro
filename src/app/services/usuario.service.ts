import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


import { Usuario, RespuestaUsuario } from '../model/usuario.model';
import { environment } from '../../environments/environment';
const urlBase = environment.urlBase;
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  constructor(public httpClient: HttpClient) { }

  public usuario?: Usuario;

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

    return this.httpClient.post<RespuestaUsuario>(`${urlBase}/login`, formData);
  }

  //login/google
  public loginGoogle(token: string) {
    let parametros = {
      token
    };
    return this.httpClient.post<RespuestaUsuario>(`${urlBase}/login/google`, parametros);
  }

}

