import { Component, Input } from '@angular/core';
import { UserGivenTask } from '../../user-profile/user-profile';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  templateUrl: './task.html',
  styleUrl: './task.css',
})
export class Task {
  @Input({ required: true }) task?: UserGivenTask;
}
