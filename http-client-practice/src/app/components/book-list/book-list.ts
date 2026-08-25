import { Component, inject, OnInit, signal } from '@angular/core';
import { BookService } from '../../services/book.service';
import { Book } from '../../models/book.model';
import { Router, RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink],
  selector: 'app-book-list',
  styleUrl: './book-list.css',
  templateUrl: './book-list.html',
})
export class BookList implements OnInit {
  protected bookService = inject(BookService);
  private route = inject(Router);

  ngOnInit(): void {
    this.bookService.loadBooks();
  }

  onEdit(id: string) {
    this.route.navigate(['/edit-book', id]);
  }


  onDelete(id: string): void {
    if (confirm('Are you sure you want to delete this book? ')) {
      this.bookService.deleteBook(id);
    }
  }
}
