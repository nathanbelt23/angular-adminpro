import { Token } from '@angular/compiler/src/ml_parser/lexer';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { UsuarioService } from './usuario.service';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

const base_Url = environment.urlBase;

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  constructor(
    public usuarioService: UsuarioService,
    public httpClient: HttpClient
  ) { }


   actualizarFoto(
    archivo: File,
    tipo: 'usuarios' | 'medicos' | 'hospitales',
    id: string
  ) {

      const url = `${base_Url}/upload/${tipo}/${id}`;
      const formData = new FormData();
      formData.append("imagen", archivo);
      let token = this.usuarioService.getToken();
      let headers = {
        'x-token': token
      };
      return this.httpClient.put(url,  formData, {headers}).pipe(
        tap(
           (p:any)=>this.usuarioService.usuario.img=p.archivo
        )


      );

  }

}
