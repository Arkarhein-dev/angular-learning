import { HttpClient } from '@angular/common/http';
import { inject, Service, signal } from '@angular/core';
import { Book } from '../models/book.model';

@Service()
export class BookService {
  private apiUrl = 'http://localhost:3000/books';
  private http = inject(HttpClient);

  books = signal<Book[]>([]);

  loadBooks(): void {
    this.http.get<Book[]>(this.apiUrl).subscribe({
      next: (data) => this.books.set(data),
      error: (err) => console.error('Error Fetching Books', err),
    });
  }

  addBook(book: Book): void {
    this.http.post<Book>(this.apiUrl, book).subscribe({
      next: (newBook) => this.books.update((current) => [...current, newBook]),
    });
  }

  updateBook(id: string, updatedBook: Book): void {
    this.http.put<Book>(`${this.apiUrl}/${id}`, updatedBook).subscribe({
      next: (res) => {
        this.books.update((current) => current.map((book) => (book.id === id ? res : book)));
      },
    });
  }

  deleteBook(id: string): void {
    this.http.delete<void>(`${this.apiUrl}/${id}`).subscribe({
      next: (res) => {
        this.books.update((current) => current.filter((book) => book.id !== id));
      },
    });
  }
}
