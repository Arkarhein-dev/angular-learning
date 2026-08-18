import { Component, EventEmitter, Input, Output } from '@angular/core';

export interface UserGivenTask {
  id: string;
  title: string;
  time: string;
  summary: string;
}

export interface DammyUser {
  id: number;
  name: string;
  imgurl: string;
  tasks?: UserGivenTask[];
}

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [],
  templateUrl: './user-profile.html',
  styleUrl: './user-profile.css',
})
export class UserProfile {
  @Input({ required: true }) userData!: DammyUser;
  @Output() selectedUser = new EventEmitter<number>();

  onSelectedUser() {
    this.selectedUser.emit(this.userData.id);
  }
}
