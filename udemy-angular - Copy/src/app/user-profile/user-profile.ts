import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UserProfileData } from './user.model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  imports: [RouterLink],
  templateUrl: './user-profile.html',
  styleUrl: './user-profile.css',
})
export class UserProfile {
  @Input({ required: true }) userProfile!: UserProfileData;
  @Output() selectedUser = new EventEmitter<number>();

  onSelectedUser() {
    this.selectedUser.emit(this.userProfile.id);
  }
}
