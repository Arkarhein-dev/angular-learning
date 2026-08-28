import {Component, inject, OnInit} from '@angular/core';
import {UserService} from '../../service/userService';
import {map} from 'rxjs';

interface UserInfo{
  id: number;
  name: string
  username: string;
  phone: string;
  email: string;
  address: string
}

@Component({
  imports: [],
  selector: 'app-user-list',
  styleUrl: './user-list.css',
  templateUrl: './user-list.html',
})
export class UserList implements OnInit{
  private userService = inject(UserService);
  users: UserInfo[]  = [];

  ngOnInit() {
    this.userService.getUsers().pipe(
      map(apiUsers =>
         apiUsers.map(user =>({
          id: user.id,
          name: user.name,
          username: user.username,
          phone: user.phone,
          email: user.email,
          address: `${user.address.suite}, ${user.address.street}, ${user.address.city}, ${user.address.zipcode}`,
        }))
      )
    ).subscribe({
      next: data => {
        this.users = data,
          console.log(this.users);
      },
      error: error => console.log(error),
      complete: () => console.log('User list loaded')
    });
  }

}
