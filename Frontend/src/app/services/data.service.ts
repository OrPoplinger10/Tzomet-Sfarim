import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { appConfig } from '../utils/app-config';
import { firstValueFrom } from "rxjs";
import AuthorModel from '../models/author-model';
import BookModel from '../models/book-model';

@Injectable({
    providedIn: 'root'
})
export class DataService {

    constructor(private http: HttpClient) { }

    public async getAllBooksAndAuthors(): Promise<BookModel[]> {
        const observable = this.http.get<BookModel[]>(appConfig.booksAndAuthors);
        const bookAndAuthors = await firstValueFrom(observable);
        return bookAndAuthors;
    }

    public async getAllAuthors(): Promise<AuthorModel[]> {
        const observable = this.http.get<AuthorModel[]>(appConfig.authorsUrl);
        const authors = await firstValueFrom(observable);
        return authors;
    }

    public async getBooksBySearchText(searchText: string): Promise<BookModel[]> {
        const observable = this.http.get<BookModel[]>(appConfig.booksBySearchText + searchText);
        const books = await firstValueFrom(observable);
        return books;
    }

    public async addBook(book: BookModel): Promise<void> {
        const observable = this.http.post<BookModel>(appConfig.booksUrl, book);
         await firstValueFrom(observable);
       
    }

    public async deleteBook(bookId: number): Promise<void> {
        const observable = this.http.delete<BookModel>(appConfig.booksUrl + bookId);
         await firstValueFrom(observable);
       
    }
    
}
