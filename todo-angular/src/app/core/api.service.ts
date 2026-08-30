import {inject, Service, signal} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {TodoModel} from '../features/todo/todo.model';
import {Observable} from 'rxjs';

@Service()
export class TodoService {
  private apiUrl: string = 'http://localhost:3000/todos';
  private httpclient = inject(HttpClient);




}
