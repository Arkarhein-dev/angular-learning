import {inject, Service, signal} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {TodoModel} from '../features/todo/todo.model';
import {Observable} from 'rxjs';

@Service()
export class TodoService {
  private apiUrl: string = 'http://localhost:3000/todos';
  private httpclient = inject(HttpClient);

  getTodos(): Observable<TodoModel[]>{
    return this.httpclient.get<TodoModel[]>(`${this.apiUrl}`);
  }

  createTodo(todo:TodoModel): Observable<TodoModel>{
    return this.httpclient.post<TodoModel>(this.apiUrl,todo);
  }

  updateTodo(id: string, todo: TodoModel): Observable<TodoModel>{
    return this.httpclient.put<TodoModel>(`${this.apiUrl}/${id}`,todo);
  }

  toggleTodo(id: string, completed: boolean): Observable<TodoModel>{
    return this.httpclient.patch<TodoModel>(`${this.apiUrl}/${id}`, { completed });
  }

  deleteTodo(id: string): Observable<void>{
    return this.httpclient.delete<void>(`${this.apiUrl}/${id}`);
  }

}
