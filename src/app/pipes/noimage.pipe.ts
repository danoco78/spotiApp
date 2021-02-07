import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noimage'
})
export class NoimagePipe implements PipeTransform {

  transform( images: any[] ): string {
    
    if ( !images ) {
      return 'assets/img/noimage.png';
    }

    if ( images.length > 0 ) {
      return images[0].url;
    }

    // por si algo falla, hay problemas con el arreglo, algo inesperado
    return 'assets/img/noimage.png';
  }

}
