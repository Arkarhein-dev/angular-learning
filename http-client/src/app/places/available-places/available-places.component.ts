import {Component, inject, signal} from '@angular/core';

import { Place } from '../place.model';
import { PlacesComponent } from '../places.component';
import { PlacesContainerComponent } from '../places-container/places-container.component';
import {HttpClient} from "@angular/common/http";
import {catchError, map, Observable, throwError} from "rxjs";

@Component({
  selector: 'app-available-places',
  standalone: true,
  templateUrl: './available-places.component.html',
  styleUrl: './available-places.component.css',
  imports: [PlacesComponent, PlacesContainerComponent],
})
export class AvailablePlacesComponent {
  private httpClient = inject(HttpClient);
  places = signal<Place[] | undefined>(undefined);
  isLoading = signal(false);
  error = signal('');



  ngOnInit() {
    this.isLoading.set(true);
    this.httpClient.get<{places: Place[]}>("http://localhost:3000/places").pipe(
      map(response => response.places),
      catchError(error =>{
        console.log(error);
        return throwError(() => new Error('Error while getting places.'));
      })
    ).subscribe({
      next: response => {

        console.log('response : ',response);
        this.places.set(response);
      },
      error: err =>{
        console.log(err);
        this.error.set(err);
      },
      complete: () =>{
        this.isLoading.set(false);
        console.log("loading completed...")
      }
    });
  }

}
