import { httpResource } from '@angular/common/http';
import { Component } from '@angular/core';
export interface UserData {
  id: number;
  name: string;
  age: number;
  address: string;
}

@Component({
  selector: 'app-deferable-view',
  imports: [],
  templateUrl: './deferable-view.html',
  styleUrl: './deferable-view.css',
})
export class DeferableView {
  userResponse = httpResource<UserData[]>(() => `http://localhost:3000/users`);
}
