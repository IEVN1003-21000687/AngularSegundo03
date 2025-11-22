import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'proyectoapi',
})
export class ProyectoapiPipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }
}
