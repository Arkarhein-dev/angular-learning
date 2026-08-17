import { Routes } from '@angular/router';
import { Home } from './routing-test/home/home';
import { About } from './routing-test/about/about';

export const routes: Routes = [
  {
    path: '',
    title: 'Appl Home Page',
    component: Home,
  },
  {
    path: '/about',
    title: 'App About page',
    component: About,
  },
];
