import { Component, inject, input } from '@angular/core';
import { Task, TaskStatus } from '../../task.model';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TaskService } from '../../taskService';

@Component({
  imports: [FormsModule, ReactiveFormsModule],
  selector: 'app-task-item',
  styleUrl: './task-item.css',
  templateUrl: './task-item.html',
})
export class TaskItem {
  private taskService = inject(TaskService);
  task = input.required<Task>();

  statusForm = new FormGroup({
    status: new FormControl<TaskStatus>('OPEN', { nonNullable: true }),
  });

  onUpdateStatus() {
    const newStatus = this.statusForm.value.status!;
    const taskId = this.task().id!;
    this.taskService.updateTaskStatus(taskId, newStatus);
  }
}
