import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'enum',
    standalone: false
})
export class EnumPipe implements PipeTransform {
  transform<T extends Record<string, string | number>>(value: T): Array<T[keyof T]> {
    const keys = Object.keys(value).filter((key) => Number.isNaN(Number(key)));
    return keys.map((key) => value[key as keyof T]);
  }
}
