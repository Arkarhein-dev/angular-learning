import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { BookModel } from './book-model';
import { Router } from '@angular/router';

@Component({
  imports: [],
  selector: 'app-book',
  styleUrl: './book.css',
  templateUrl: './book.html',
})
export class Book {
  private router = inject(Router);
  @Input({ required: true }) book?: BookModel;

  bookOpen(bookId: number | undefined) {
    this.router.navigate(['/borrow-books', bookId, 'details']);
  }
}
