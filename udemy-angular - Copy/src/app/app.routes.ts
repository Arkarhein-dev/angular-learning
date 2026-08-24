import { Routes } from '@angular/router';
import { Tasks } from './tasks/tasks';
import { NotFound } from './not-found/not-found';

export const routes: Routes = [
  {
    path: '',
    component: NotFound,
  },
  {
    path: 'users/:userId/tasks',
    component: Tasks,
  },
];
