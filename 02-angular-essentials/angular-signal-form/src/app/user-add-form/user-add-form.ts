import { Component, inject, signal } from '@angular/core';
import { User } from '../services/user';
import { form, min, required, FormField } from '@angular/forms/signals';

interface UserData {
  username: string;
  age: number;
}

@Component({
  selector: 'app-user-add-form',
  imports: [FormField],
  templateUrl: './user-add-form.html',
  styleUrl: './user-add-form.css',
})
export class UserAddForm {
  protected userService = inject(User);
  protected formSubmited = signal(false);

  userModel = signal<UserData>({ username: '', age: 0 });

  userForm = form(this.userModel, (schemaPath) => {
    required(schemaPath.username, { message: 'Username is required' });
    required(schemaPath.age, { message: 'Age is required' });
    min(schemaPath.age, 18, { message: 'Age must be at least 18' });
  });

  onSubmit(e: Event) {
    e.preventDefault();
    this.formSubmited.set(true);
    if (this.userForm().invalid()) {
      return;
    }

    const { username, age } = this.userModel();
    this.userService.addUser(username, age.toString());
    this.userModel.set({ username: '', age: 0 });
  }
}
