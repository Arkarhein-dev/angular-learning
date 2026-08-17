import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-routing-test',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './routing-test.html',
  styleUrl: './routing-test.css',
})
export class RoutingTest {}
