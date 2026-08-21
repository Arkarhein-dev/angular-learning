import { Routes } from '@angular/router';
import { Home } from './router-test/home/home';
import { About } from './router-test/about/about';
import { Projects } from './router-test/projects/projects';
import { Contact } from './router-test/contact/contact';
import { NotFound } from './router-test/not-found/not-found';
import { Setting } from './router-test/setting/setting';
import { Profile } from './router-test/setting/profile/profile';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: Home,
  },
  {
    path: 'home/:paramId',
    component: Home,
  },
  {
    path: 'old-home/:paramId',
    redirectTo: (route) => {
      return `/home/${route.params['paramId']}`;
    },
  },
  {
    path: 'about',
    component: About,
  },
  {
    path: 'projects',
    component: Projects,
  },
  {
    path: 'contact',
    component: Contact,
  },
  {
    path: 'setting',
    component: Setting,
    children: [
      {
        path: 'profile',
        component: Profile,
      },
    ],
  },
  {
    path: '**',
    component: NotFound,
  },
];
