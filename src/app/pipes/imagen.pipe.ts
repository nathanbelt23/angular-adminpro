import { Pipe, PipeTransform } from '@angular/core';
import { environment } from '../../environments/environment';

const baseImagenes = environment.urlBaseImagenes;

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {
  transform(value: string, tipo: "medicos|hospitales|usuarios"): string {
    if (!value) {
      return `${baseImagenes}/upload/no/noimage.png`;
    }
    else if (value.includes("https")) {
      return value;
    }
    else
      if (value == "") {
        return `${baseImagenes}/upload/no/noimage.png`;
      }
      else {
        return `${baseImagenes}/upload/${tipo}/${value}`;
      }
  }

}
