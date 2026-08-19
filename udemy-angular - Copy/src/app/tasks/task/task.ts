import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { DatePipe } from '@angular/common';
import { TaskData } from '../tasks.model';

@Component({
  selector: 'app-task',
  imports: [DatePipe],
  templateUrl: './task.html',
  styleUrl: './task.css',
})
export class Task {
  @Input({ required: true }) task!: TaskData;
  @Output() complete = new EventEmitter<string>();

  onCompletedTask(){
    this.complete.emit(this.task.id);
  }
}
