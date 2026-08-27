import { Component } from '@angular/core';
import { NewTask } from './new-task/new-task';
import { TaskLists } from './task-lists/task-lists';

@Component({
  imports: [NewTask, TaskLists],
  selector: 'app-tasks',
  styleUrl: './tasks.css',
  templateUrl: './tasks.html',
})
export class Tasks {

}
