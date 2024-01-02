import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BookSearchModel } from '../models/book-search.model';
import { Observable } from 'rxjs';
import { BookModel } from '../models/book.model';
import { MemberModel } from '../models/member.model';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  APIUrl = 'https://library.jedlik.cloud';

  constructor(private http: HttpClient) { }

  listBooks(searchModel: BookSearchModel): Observable<BookModel[]> {
    let url = `${this.APIUrl}/books?from=${searchModel.from}&count=${searchModel.count}`;
    if (searchModel.author) {
      url += `&author=${searchModel.author}`;
    }
    if (searchModel.title) {
      url += `&title=${searchModel.title}`;
    }
    if (searchModel.isbn) {
      url += `&isbn=${searchModel.isbn}`;
    }
    return this.http.get<BookModel[]>(url);
  }

  memberList(name: string): Observable<MemberModel[]> {
    return this.http.get<MemberModel[]>(`${this.APIUrl}/members/find?name=${name}`);
  }

  newMember(member: MemberModel): Observable<MemberModel>{
    return this.http.post<MemberModel>(`${this.APIUrl}/members/new`, {
      name: member.name, 
      birthDate: member.birthDate,
      mobil: member.mobil,
      email: member.email});
  }
}
