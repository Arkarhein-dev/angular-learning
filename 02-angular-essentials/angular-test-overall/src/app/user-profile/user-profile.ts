import { Component, signal } from '@angular/core';
import { UserInfoCard } from './user-info-card/user-info-card';

@Component({
  selector: 'app-user-profile',
  imports: [UserInfoCard],
  templateUrl: './user-profile.html',
  styleUrl: './user-profile.css',
})
export class UserProfile {
  currentUser = signal('Alex');
  selectedUser = signal('None');

  handleSelection(name: string) {
    this.selectedUser.set(name);
    console.log('button clicked....');
  }
}
