import { Service, signal } from '@angular/core';

interface UserInfo {
  name: string;
  age: number;
}

@Service()
export class User {
  private _userInfo = signal<UserInfo[]>([]);

  userInfo = this._userInfo.asReadonly();

  addUser(name: string, age: string) {
    const newUser: UserInfo = { name, age: parseInt(age) };
    this._userInfo.update(() => [...this._userInfo(), newUser]);
  }
}
