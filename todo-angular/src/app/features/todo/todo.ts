import {Component, inject} from '@angular/core';
import {TodoService} from '../../core/api.service';
import {TodoModel} from './todo.model';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  imports: [],
  selector: 'app-todo',
  styleUrl: './todo.css',
  templateUrl: './todo.html',
})
export class Todo {
  private todoService = inject(TodoService);
  private todos: TodoModel[] = [];

  todoForm = new FormGroup({
    title: new FormControl('',[Validators.required,Validators.minLength(6)]),
  });

  ngOnInit() {
    this.loadTodos();
  }

  loadTodos(){
    this.todoService.getTodos().subscribe(todos => this.todos = todos);
  }

  createTodo(){
    if(this.todoForm.invalid) return;

    const title = this.todoForm.value.title!;
    const newTodo: TodoModel = {id: new Date().toISOString(), title, completed: false}
    this.todoService.createTodo(newTodo).subscribe({
      next: () => this.todoForm.reset(),
      error: (error) => console.error(error)
    });
  }

  updateTodo(id: string, newTitle: string){
    const todo = this.todos.find(todo => todo.id === id );
    if(!todo && !newTitle.trim()) return;

    const updatedTodo = {...todo, title: newTitle}

    this.todoService.updateTodo(id, updatedTodo).subscribe();
  }

  deleteTodo(id: string){
    if(!id) return;

    this.todoService.deleteTodo(id).subscribe({

    })
  }

}
