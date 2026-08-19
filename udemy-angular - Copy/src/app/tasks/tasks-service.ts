import { inject, Service } from '@angular/core';
import { UserProfileService } from '../user-profile/user-profile-service';
import { NewTaskData } from './tasks.model';

@Service()
export class TasksService {
  private userService = inject(UserProfileService);

  addTask(newTask: NewTaskData, userId: number) {
    const user = this.userService.userProfiles.find((user) => user.id === userId);
    const randomId = Math.round(Math.random() * 10);
    user?.tasks.push({
      id: 'task' + randomId,
      title: newTask.title,
      summary: newTask.summary,
      time: newTask.date,
    });
  }
  removeTask(taskId: string, userId: number) {
    const user = this.userService.userProfiles.find((user) => user.id === userId);
    if (user) {
      user.tasks = user.tasks.filter((task) => task.id !== taskId);
    }
  }
}
