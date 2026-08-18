import { Component, signal } from '@angular/core';
import { userProfiles } from './data/user.profile';
import { DammyUser, UserProfile } from './user-profile/user-profile';
import { Header } from './header/header';
import { UserTask } from './user-task/user-task';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [UserProfile, Header, UserTask],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('udemy-angular');
  USER_PROFILES = userProfiles;
  activeUser?: DammyUser;

  getUserData(id: number) {
    console.log(id);
    const user = this.USER_PROFILES.find((user) => user.id === id);
    if (user) {
      this.activeUser = user;
    }
  }
}
