import { Component, Input } from '@angular/core';
import { DammyUser } from '../user-profile/user-profile';
import { Task } from './task/task';

@Component({
  selector: 'app-user-task',
  standalone: true,
  imports: [Task],
  templateUrl: './user-task.html',
  styleUrl: './user-task.css',
})
export class UserTask {
  @Input({ required: true }) user?: DammyUser;
  selectedUserTasks = this?.user?.tasks;
}
