import { Component } from '@angular/core';
import { Button } from '../shared/button/button';

@Component({
  imports: [Button],
  selector: 'app-header',
  styleUrl: './header.css',
  templateUrl: './header.html',
})
export class Header {}
