import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BookSearchModel } from '../models/book-search.model';
import { BookModel } from '../models/book.model';

@Injectable({
  providedIn: 'root',
})
export class HttpService {

  apiUrl = 'https://library.jedlik.cloud';
  constructor(private http: HttpClient) { }

  bookList(searchModel: BookSearchModel): Observable<BookModel[]> {
    let url = `${this.apiUrl}/books?from=${searchModel.from}&count=${searchModel.count}`;
    if (searchModel.title) {
      url += `&title=${searchModel.title}`;
    }
    if (searchModel.author) {
      url += `&author=${searchModel.author}`;
    }
    if (searchModel.isbn) {
      url += `&isbn=${searchModel.isbn}`;
    }
    return this.http.get<BookModel[]>(url);
  }
}
