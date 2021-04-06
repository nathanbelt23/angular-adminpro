import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UsuarioService } from '../../services/usuario.service';
import Swal from 'sweetalert2';
import { FileUploadService } from '../../services/file-upload.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  public archivoSubido: any= null;
  public imgTemp:any=null;

  frmPerfil= this.formBuilder.group(
    {
        nombre:[this.usuarioService.usuario.nombre, [Validators.required]],
        email:[this.usuarioService.usuario.email, [Validators.required]]
    }
  );
  constructor(
    private formBuilder : FormBuilder,
     public  usuarioService: UsuarioService ,
     public fileUploadService: FileUploadService
     ) { }

  ngOnInit(): void {

    if(this.usuarioService.usuario.google)
    {
        this.frmPerfil.get("email")?.disable();
    }

  }
  public guardar()
  {
      try
      {
          this.usuarioService.actualizarUsuario(
            this.frmPerfil.value,  
            this.usuarioService.usuario.uid).subscribe(p=>{
                Swal.fire(
                  {
                      title:"Info",
                      icon:"info",
                      text:p.msg

                  }

                );

            });
      }
      catch(error)
      {
          console.error(error);
      }
  }
  subirImagen (archivo: File)
  {
    this.archivoSubido=  archivo;

    if  (!this.archivoSubido)
    {
      return;
    }else
    {
      const  reader = new FileReader();
      const url64= reader.readAsDataURL(archivo);

      reader.onloadend=()=>{
          this.imgTemp=reader.result;

      }

    }


  } 

  public async guardarImagen( )
  {

    console.log(this.archivoSubido);
      if (this.archivoSubido)
      {
          console.log("guardar archivo");
             await this.fileUploadService.actualizarFoto(
              this.archivoSubido, 
              "usuarios",
              this.usuarioService.usuario.uid).subscribe(
                (p:any)=> {console.log(p); console.log(this.usuarioService.usuario);}

              );
         


      }

  }

}
