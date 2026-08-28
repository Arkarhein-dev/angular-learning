import {Component, computed, DestroyRef, effect, inject, OnInit, signal} from '@angular/core';
import {ObservableDemoComponent} from "./obserable-demo/observable-demo.component";
import {DataTransformationComponent} from "./data-transformation/data-transformation.component";
import {HigherOrderMappingComponent} from "./higher-order-maping/higher-order-mapping.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    ObservableDemoComponent,
    DataTransformationComponent,
    HigherOrderMappingComponent
  ],
  templateUrl: './app.component.html'
})
export class AppComponent{

}
