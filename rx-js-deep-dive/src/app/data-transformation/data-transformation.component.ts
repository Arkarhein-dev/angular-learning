import { Component } from '@angular/core';
import {filter, map, of} from "rxjs";


interface UserModel {
  id: number;
  name: string;
  role: 'ADMIN' | 'USER';
}


@Component({
  selector: 'app-data-transformation',
  standalone: true,
  imports: [],
  templateUrl: './data-transformation.component.html',
  styleUrl: './data-transformation.component.css'
})
export class DataTransformationComponent {
   mockUsers: UserModel[] = [
    {id: 1, name: 'Arkar Hein',role: 'ADMIN'},
     {id: 2, name: 'Hein Arkar',role: 'USER'},
     {id: 3, name: 'Arhein',role: 'ADMIN'}
  ]

  user$ = of(this.mockUsers);

   getUserData(){
     this.user$.pipe(
       map(users => users.filter(user => user.role === 'ADMIN').map(user => user.name))
     ).subscribe({
       next: userRoleData => console.log("User Role Data: ",userRoleData),
       complete: () => console.log("User Role Data Complete."),
     })
   }

}
