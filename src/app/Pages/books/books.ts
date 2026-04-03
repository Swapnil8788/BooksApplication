import { Component, inject } from '@angular/core';
import { Api } from '../../Services/api';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-books',
  imports: [CommonModule],
  templateUrl: './books.html',
  styleUrl: './books.scss',
})
export class Books {
  private bookService = inject(Api);
  books: any[] = [];

  getBooks() {
    this.bookService.getBooks().subscribe((data: any) => {
      this.books = [...data];
      console.log(this.books);
    });
  }
}
