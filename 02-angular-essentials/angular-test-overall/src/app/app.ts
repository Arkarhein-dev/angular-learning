import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserAddForm } from './user-add-form/user-add-form';
import { UserProfile } from './user-profile/user-profile';
import { DeferableView } from './deferable-view/deferable-view';
import { OptimizingImg } from './optimizing-img/optimizing-img';
import { RoutingTest } from './routing-test/routing-test';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DeferableView, OptimizingImg, RoutingTest],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('angular-signal-form');
}
