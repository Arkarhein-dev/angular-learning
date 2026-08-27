import { Component, computed, inject, signal } from '@angular/core';
import { TaskService } from '../taskService';
import { TaskItem } from './task-item/task-item';

@Component({
  imports: [TaskItem],
  selector: 'app-task-lists',
  styleUrl: './task-lists.css',
  templateUrl: './task-lists.html',
})
export class TaskLists {
  private taskService = inject(TaskService);
  private selectedFilter = signal<string>('all');
  tasks = computed(() => {
    switch (this.selectedFilter()) {
      case 'open':
        return this.taskService.allTasks().filter((task) => task.status === 'OPEN');
      case 'in-progress':
        return this.taskService.allTasks().filter((task) => task.status === 'IN_PROGRESS');
      case 'done':
        return this.taskService.allTasks().filter((task) => task.status === 'DONE');
      default:
        return this.taskService.allTasks();
    }
  });

  onChangeTasksFilter(filter: string) {
    this.selectedFilter.set(filter);
  }
}
