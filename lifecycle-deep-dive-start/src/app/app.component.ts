import { Component } from '@angular/core';

import { LifecycleComponent } from "./lifecycle/lifecycle.component";
import {
  ViewAndContentChildComponent
} from "./view-and-content-child/view-and-content-child/view-and-content-child.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
  imports: [LifecycleComponent, ViewAndContentChildComponent]
})
export class AppComponent {
  lifecycleComponentIsVisible = false;
  lifecycleInputText = 'Some Random Number: ' + Math.random() * 100;

  onToggleLifecycleComponentVisibility() {
    this.lifecycleComponentIsVisible = !this.lifecycleComponentIsVisible;
  }

  onChangeLifecycleInputText() {
    this.lifecycleInputText = 'Some Random Number: ' + Math.random() * 100;
  }
}
