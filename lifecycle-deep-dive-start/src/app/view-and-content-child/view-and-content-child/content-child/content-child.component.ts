import { Component } from '@angular/core';
import {ViewAndContentChildComponent} from "../view-and-content-child.component";

@Component({
  selector: 'app-content-child',
  standalone: true,
  imports: [
    ViewAndContentChildComponent
  ],
  templateUrl: './content-child.component.html',
  styleUrl: './content-child.component.css'
})
export class ContentChildComponent {

}
