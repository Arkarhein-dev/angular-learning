import { Component, Input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-borrow-book-details',
  styleUrl: './borrow-book-details.css',
  templateUrl: './borrow-book-details.html',
})
export class BorrowBookDetails {
  @Input({ required: true }) bookId!: number;
}
