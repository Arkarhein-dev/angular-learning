import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'joinnamespipe',
  pure: false,
})
export class JoinNamesInpurePipe implements PipeTransform {
  transform(names: string[]): string {
    return names.join(' ');
  }
}
