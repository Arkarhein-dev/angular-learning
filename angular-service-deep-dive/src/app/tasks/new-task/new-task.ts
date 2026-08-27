import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TaskService } from '../taskService';
import { TaskStatus } from '../task.model';

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-new-task',
  styleUrl: './new-task.css',
  templateUrl: './new-task.html',
})
export class NewTask {
  private taskService = inject(TaskService);

  taskForm = new FormGroup({
    title: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
  });

  addNewTask() {
    if (this.taskForm.invalid) return;
    const taskData: { title: string; description: string } = {
      title: this.taskForm.value.title!,
      description: this.taskForm.value.description!,
    };
    this.taskService.addTask(taskData);
    this.taskForm.reset();
  }
}
