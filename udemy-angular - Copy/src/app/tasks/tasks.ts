import { NewTaskData } from './tasks.model';
import { Component, inject, Input } from '@angular/core';
import { UserProfileData } from '../user-profile/user.model';
import { Task } from './task/task';
import { NewTask } from './new-task/new-task';
import { TasksService } from './tasks-service';

@Component({
  selector: 'app-tasks',
  imports: [Task, NewTask],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
})
export class Tasks {
  @Input({ required: true }) selectedUser!: UserProfileData;
  isAddingTask = false;
  private taskService = inject(TasksService);

  get tasks() {
    return this.selectedUser.tasks;
  }

  onAddNewTask() {
    this.isAddingTask = true;
  }
  onCancelAddTask() {
    this.isAddingTask = false;
  }

  completedTask(taskId: string) {
    this.taskService.removeTask(taskId, this.selectedUser.id);
  }
}
