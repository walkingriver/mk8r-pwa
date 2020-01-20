import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'enum'
})
export class EnumPipe implements PipeTransform {
  transform(value: object): string[] {
    const keys = Object.keys(value);
    return keys.slice(0, keys.length / 2);
  }
}
