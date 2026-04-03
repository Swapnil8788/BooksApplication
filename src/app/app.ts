import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Books } from './Pages/books/books';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Books],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('BookApplicationWeb');
}
