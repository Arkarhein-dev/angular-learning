import { Component } from '@angular/core';
import {Observable} from "rxjs";

@Component({
  selector: 'app-obserable-demo',
  standalone: true,
  imports: [],
  templateUrl: './observable-demo.component.html',
  styleUrl: './observable-demo.component.css'
})
export class ObservableDemoComponent {
  customStream$ = new Observable<string>((subscriber) =>{
    subscriber.next('value1');
      subscriber.next('value2');
      subscriber.next('value3');
      subscriber.error(new Error('something went wrong'));
      subscriber.complete();
  });

  click() {
    this.customStream$.subscribe({
      next: value => {console.log("Received Value: ",value)},
      error: error => {console.log("Received Value: " + error)},
      complete: () => console.log("Custom Stream completed...")
    });
  }
}
