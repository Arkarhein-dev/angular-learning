import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-user-info-card',
  imports: [],
  templateUrl: './user-info-card.html',
  styleUrl: './user-info-card.css',
})
export class UserInfoCard {
  username = input('Hein');
  age = input(20);

  userSelected = output<string>();

  sendNotification() {
    this.userSelected.emit(this.username());
  }
}
