import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'escuelaDigital'
})
export class EscuelaDigitalPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return null;
  }

}
