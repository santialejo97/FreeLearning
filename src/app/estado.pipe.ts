import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'estado'
})
export class EstadoPipe implements PipeTransform {

  transform(valor: number | undefined): string {

    if(valor== 1){
      return 'Activo'
    }else {
      return 'Inactivo'
    }
    
  }

}
