import { Routes } from '@angular/router';
import { Home } from './home/home';
import { BorrowBooks } from './borrow-books/borrow-books';
import { BorrowBookDetails } from './borrow-book-details/borrow-book-details';
import { NotFound } from './not-found/not-found';
import { Setting } from './setting/setting';
import { UserProfile } from './user-profile/user-profile';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    // component: Home,
    // home component is split into a separate js file and fetched on demand
    loadComponent: () => import('./home/home').then((c) => c.Home),
  },
  {
    path: 'borrow-books',
    // component: BorrowBooks,
    // BorrowBookComponent is split into a separate JS file and fetched on demand
    loadComponent: () => import('./borrow-books/borrow-books').then((c) => c.BorrowBooks),
  },
  {
    path: 'old-borrow-books',
    redirectTo: (route) => {
      return `borrow-books`;
    },
  },
  {
    path: 'borrow-books/:bookId/details',
    // component: BorrowBookDetails,
    loadComponent: () =>
      import('./borrow-book-details/borrow-book-details').then((c) => c.BorrowBookDetails),
  },
  {
    path: 'old-borrow-books/:bookId/details',
    redirectTo: (route) => {
      return `borrow-books/${route.params['bookId']}/details`;
    },
  },
  {
    path: 'profile',
    component: UserProfile,
    children: [
      {
        path: 'setting',
        // component: Setting,
        loadComponent: () => import('./setting/setting').then((c) => c.Setting),
      },
    ],
  },
  {
    path: '**',
    component: NotFound,
  },
];
