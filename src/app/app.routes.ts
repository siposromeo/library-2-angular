import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BookSearchComponent } from './components/book-search/book-search.component';
import { MemberComponent } from './components/member/member.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'book-search', component: BookSearchComponent},
    {path: 'members', component: MemberComponent}
];
