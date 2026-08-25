import { Service } from '@angular/core';
import { toKebabCase } from './custom-pipe/ToKebabCase';

@Service()
export class FormatterService {
  formatName(name: string): string {
    return toKebabCase(name);
  }
}
