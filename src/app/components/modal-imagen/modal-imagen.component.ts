import { Component, OnInit } from '@angular/core';
import { ModalImageService } from '../../services/modal-image.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { FileUploadService } from '../../services/file-upload.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-modal-imagen',
  templateUrl: './modal-imagen.component.html',
  styleUrls: ['./modal-imagen.component.css']
})
export class ModalImagenComponent implements OnInit {


  archivoSubido: any = null;

  imgTemp: any = null;

  constructor(public modalImageService: ModalImageService,
    private usuarioService: UsuarioService
    , private fileUploadService: FileUploadService) { }

  ngOnInit(): void {

    this.archivoSubido= null;
    this.imgTemp = null;
  }

  cerrarModal() {
    this.modalImageService.cerrarModal();
  }

  subirImagen(archivo: File) {
    this.archivoSubido = archivo;

    if (!this.archivoSubido) {
      return;
    } else {
      const reader = new FileReader();
      const url64 = reader.readAsDataURL(archivo);

      reader.onloadend = () => {
        this.imgTemp = reader.result;

      }

    }


  }

  public async guardarImagen() {

    //console.log(this.archivoSubido);
    if (this.archivoSubido) {
      ///console.log("guardar archivo");
      await this.fileUploadService.actualizarFoto(
        this.archivoSubido,
        "usuarios",
        this.modalImageService.usuarioGen.uid, false).subscribe(
          (p: any) => {
            this.modalImageService.usuarioGen.img = p.archivo;

            Swal.fire(
              {
                title: "Información",
                icon: "success",
                text: "La imagen ha sido cargada con exito :)",
                showCancelButton: false,
                timer: 1500
              }

            );
            this.archivoSubido= null;
            this.imgTemp = null;
        
            this.modalImageService.cerrarModal();
          }
        );
    }

  }

}

