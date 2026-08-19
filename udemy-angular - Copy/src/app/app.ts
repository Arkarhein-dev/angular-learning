import { Component, EventEmitter, inject, Output, signal } from '@angular/core';
import { Header } from './header/header';
import { UserProfile } from './user-profile/user-profile';
import { UserProfileData } from './user-profile/user.model';
import { Tasks } from './tasks/tasks';
import { UserProfileService } from './user-profile/user-profile-service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Header, UserProfile, Tasks],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('udemy-angular');
  private userProfileService = inject(UserProfileService);
  userProfileArray = this.userProfileService.userProfiles;
  selectedUser?: UserProfileData;

  onSelectUser(id: number) {
    if (id) {
      console.log(id);
      const user = this.userProfileArray.find((user) => user.id === id);
      console.log(user);
      this.selectedUser = user;
    }
  }
}
