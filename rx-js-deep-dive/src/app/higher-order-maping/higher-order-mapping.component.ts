import { Component } from '@angular/core';
import {concatMap, debounceTime, delay, map, mergeMap, Observable, of, switchMap, take} from "rxjs";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";

interface UserModel {
  id: number;
  name: string;
  role: 'ADMIN' | 'USER';
}

@Component({
  selector: 'app-higher-order-maping',
  standalone: true,
  imports: [],
  templateUrl: './higher-order-mapping.component.html',
  styleUrl: './higher-order-mapping.component.css'
})
export class HigherOrderMappingComponent {

  mockFetchUserDetails(userId: number): Observable<string>{
    return of(`Details for User : ${userId}`).pipe(delay(2000));
  }

  userId$ =   of(1,2,3);

  testSwitchMap() {
    this.userId$.pipe(
      switchMap(userId => this.mockFetchUserDetails(userId)),
    ).subscribe({
      next: value => console.log(value),
    });
  }

  testConcatMap(){
    this.userId$.pipe(
      concatMap(userId => this.mockFetchUserDetails(userId)),
    ).subscribe({
      next: value => console.log(value),
    });
  }

  testMergeMap(){
    this.userId$.pipe(
      mergeMap(userId => this.mockFetchUserDetails(userId))
    ).subscribe({
      next: value => console.log("MergeMap : "+ value),
    });
  }
}
