import { Pipe, PipeTransform } from '@angular/core';
import { toKebabCase } from './ToKebabCase';

@Pipe({
  name: 'kebabcase',
})
export class KebabCasePipe implements PipeTransform {
  transform(value: string): string {
    return toKebabCase(value);
  }
}
