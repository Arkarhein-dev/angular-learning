import { Routes } from '@angular/router';
import { Home } from './home/home';
import { BorrowBooks } from './borrow-books/borrow-books';
import { BorrowBookDetails } from './borrow-book-details/borrow-book-details';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: Home,
  },
  {
    path: 'borrow-books',
    component: BorrowBooks,
  },
  {
    path: 'borrow-books/:bookId/details',
    component: BorrowBookDetails,
  },
];
