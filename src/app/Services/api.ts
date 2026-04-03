import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Api {
  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:5240/api';
  
  getBooks() {
    return this.http.get(`${this.apiUrl}/Book`);
  }
}
