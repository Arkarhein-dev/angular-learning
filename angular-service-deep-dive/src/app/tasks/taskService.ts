import { Service, signal } from '@angular/core';
import { Task, TaskStatus } from './task.model';

@Service()
export class TaskService {
  private tasks = signal<Task[]>([]);
  allTasks = this.tasks.asReadonly();

  addTask(taskData: { title: string; description: string }) {
    const newTask: Task = {
      ...taskData,
      id: new Date().toISOString(),
      status: 'OPEN',
    };

    this.tasks.update((oldTask) => [...oldTask, newTask]);
    console.log('new task added', newTask);
    console.log(this.tasks());
  }

  updateTaskStatus(taskId: string, newStatus: TaskStatus) {
    if (taskId != null) {
      this.tasks.update(allTasks=>{
       return allTasks.map(task =>
        task.id === taskId ? { ...task, status: newStatus } : task,
       );
      });
    }
  }
}
