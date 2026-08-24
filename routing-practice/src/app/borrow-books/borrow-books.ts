import { Book } from '../book/book';
import { BookModel } from '../book/book-model';
import { borrowedBooks } from './../data/borrow-books-data';
import { Component } from '@angular/core';

@Component({
  imports: [Book],
  selector: 'app-borrow-books',
  styleUrl: './borrow-books.css',
  templateUrl: './borrow-books.html',
})
export class BorrowBooks {
  borrowBooks: BookModel[] = borrowedBooks;
}
