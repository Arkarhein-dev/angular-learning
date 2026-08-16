import { Component, computed, signal } from '@angular/core';
import { Home } from "../home/home";

@Component({
  selector: 'app-user-profile',
  imports: [Home],
  templateUrl: './user-profile.html',
  styleUrl: './user-profile.css',
})
export class UserProfile {
  secondName = signal('Hein');

  firstName = signal('Htet');

  firstNameUpperCase = computed(() => this.firstName().toString().toUpperCase());
  secondNameUpperCase = computed(() => this.secondName().toString().toUpperCase());
}
