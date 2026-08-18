import { About } from './routing-test/about/about';
import { Home } from './routing-test/home/home';
import { Routes } from '@angular/router';
import { NotFound } from './routing-test/not-found/not-found';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: Home,
    title: 'Home Page',
  },
  {
    path: 'about',
    component: About,
    title: 'About Page',
  },
  {
    path: '**',
    component: NotFound,
  },
];
