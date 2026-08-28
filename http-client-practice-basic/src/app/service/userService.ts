import {inject, Service} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../user/userModel';

@Service()
export class UserService {
  private http = inject(HttpClient);
  private url = "https://jsonplaceholder.typicode.com/users";

  getUsers(): Observable<User[]>{
    return this.http.get<User[]>(this.url);
  }
}
