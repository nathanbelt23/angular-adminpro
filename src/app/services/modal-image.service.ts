import { Injectable } from '@angular/core';
import { Usuario } from '../model/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class ModalImageService {

  public ocultarModal: boolean=true;
  usuarioGen:Usuario= new Usuario("",false, "", );
  constructor(


  ) { 

  }
public  abrirModal( usuario:Usuario)
{
  this.usuarioGen= usuario;
  this.ocultarModal= false;
}
public  cerrarModal()
{
  this.ocultarModal= true;
}


}
