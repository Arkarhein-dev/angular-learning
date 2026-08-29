import {Component, DestroyRef, inject, OnInit} from '@angular/core';
import {interval, map} from "rxjs";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit{
  private destroyRef = inject(DestroyRef)

  ngOnInit() {
    // const subscription = interval(1000).subscribe(
    //   {
    //     next: value =>{
    //       console.log(value);
    //     }
    //   }
    // );
  }

}
