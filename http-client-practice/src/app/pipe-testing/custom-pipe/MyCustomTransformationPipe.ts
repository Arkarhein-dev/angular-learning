import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customPipe',
})
export class MyCustomTransformationPipe implements PipeTransform {
  transform(value: string, format: string): string {
    let msg = `My Custom Value is ${value}`;
    if (format.toLowerCase() === 'lowercase') {
      return msg.toLowerCase();
    }
    return msg.toUpperCase();
  }
}
