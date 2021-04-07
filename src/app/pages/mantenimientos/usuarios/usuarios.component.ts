import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../../services/usuario.service';
import { Usuario } from '../../../model/usuario.model';
import { BusquedasService } from '../../../services/busquedas.service';
import Swal from 'sweetalert2';
import { ToastrService } from 'ngx-toastr';
import { ModalImageService } from '../../../services/modal-image.service';


@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: [
    './usuarios.component.css'
  ]
})
export class UsuariosComponent implements OnInit {

  usuariosTemp?: Usuario[] = [];
  usuarios?: Usuario[] = [];
  totalUsuarios: number = 0;
  booCargando: boolean = false;
  desde: number = 0;

  constructor(
    private usuarioService: UsuarioService, 
    private busquedasService: BusquedasService,
    private modalImageService: ModalImageService
    
    ) {
    this.cargarListadoUsuarios();
  }
  ngOnInit(): void {
  }
  public cargarListadoUsuarios() {
    this.booCargando = true;
    this.usuarioService.listadoUsuarios(this.desde).subscribe(
      p => {
        this.usuarios = p.usuarios;
        this.totalUsuarios = p.totalUsuarios;
        this.usuariosTemp = p.usuarios;
        this.booCargando = false;
      }
    );
  }


  public cambiarPorPaginacion(valor: number) {
    this.desde = this.desde + valor;


    if (this.desde > this.totalUsuarios - 1) {
      this.desde = this.totalUsuarios - 1;

    }

    if (this.desde < 0) {
      this.desde = 0;
    }




    this.cargarListadoUsuarios();
  }



  public busquedaSevice(termino: string) {

    if (termino.trim().length == 0) {
      this.usuarios = this.usuariosTemp;

    }
    else {
      this.booCargando = true;
      this.busquedasService.listadoUsuariosxTermino(termino).
        subscribe(p => {
          this.usuarios = p.usuarios;
          this.booCargando = false;
        });
    }
  }


  private elimnarUsuarioP2(usuario: Usuario) {

    this.usuarioService.eliminarUsuario(usuario.uid).subscribe(
      (p: any) => {
        if (p.ok) {
          this.desde = 0;
          this.cargarListadoUsuarios();
          Swal.fire(
            {
              title: "Eliminar de usuario",
              icon: "success",
              text: "Se elimino al  usuario",
              showConfirmButton: false,
              timer: 1500
            }
          );

        }
        else {
          Swal.fire(
            {
              title: "Eliminar de usuario",
              icon: "error",
              text: p.msg
            }
          );
        }
      }
    );

  }

  public eliminarUsuario(usuario: Usuario) {

    Swal.fire({
      title: 'Estas seguro?',
      text: `Deseas borrar a ${usuario.nombre} del sitema`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, borralo!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.elimnarUsuarioP2(usuario);
      }
    });




  }

 public cambiarRole(usuario:Usuario)
  {
      this.usuarioService.actualizarUsuarioClase(usuario, usuario.uid).subscribe(
        p=>
        {
          Swal.fire(
            {
              position: 'top-end',
              title: "Orale",
              icon: "success",
              text: "Actualizacion de rol  fue exitosa",
              showConfirmButton: false,
              timer: 1000
            }
          );
        }
      ); 
  }


  public abrirModaleImage(usuario:Usuario)
  {

    console.log(  usuario);
    this.modalImageService.abrirModal(usuario);

  }

}