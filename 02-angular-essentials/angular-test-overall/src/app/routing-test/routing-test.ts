import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-routing-test',
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './routing-test.html',
  styleUrl: './routing-test.css',
})
export class RoutingTest {}
