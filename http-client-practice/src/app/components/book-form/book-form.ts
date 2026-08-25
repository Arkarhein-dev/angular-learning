import { Component, effect, inject, input, output, signal } from '@angular/core';
import { BookService } from '../../services/book.service';
import { Book } from '../../models/book.model';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-book-form',
  styleUrl: './book-form.css',
  templateUrl: './book-form.html',
})
export class BookForm {
  private bookService = inject(BookService);
  private router = inject(Router);

  id = input<string>();

  bookForm = new FormGroup({
    title: new FormControl('', [Validators.required]),
    author: new FormControl('', [Validators.required]),
    isbn: new FormControl('', [Validators.required]),
    category: new FormControl('', [Validators.required]),
  });

  constructor() {
    effect(() => {
      const bookId = this.id();
      const book = this.bookService.books().find((b) => b.id === bookId);
      if (book) {
        this.bookForm.patchValue(book);
      } else {
        this.bookForm.reset();
      }
    });
  }

  onSubmit() {
    if (this.bookForm.invalid) return;

    const formData = this.bookForm.value as Book;
    const currentId = this.id();

    if (currentId) {
      this.bookService.updateBook(currentId, formData);
    } else {
      this.bookService.addBook(formData);
    }
    this.router.navigate(['/books']);
  }

  onCancel() {
    this.bookForm.reset();
    this.router.navigate(['/books']);
  }
}
