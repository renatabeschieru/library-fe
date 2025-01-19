import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { HttpClient } from '@angular/common/http'
import { Book } from "./book.interface";

@Injectable({
    providedIn: 'root'
})
export class BookService {
    
    private baseUrl = 'http://localhost:8080/books'
    public bookAddedSubject = new Subject<Book>();
    public bookAdded$ = this.bookAddedSubject.asObservable();

    public bookDeletedSubject = new Subject<void>();
    public bookDeleted$ = this.bookDeletedSubject.asObservable();

    public bookEditedSubject = new Subject<void>();
    public bookEdited$ = this.bookEditedSubject.asObservable();

    constructor(
        private httpClient: HttpClient
    ) {}

    addBook(book: Book): Observable<Book> {
        return this.httpClient.post<Book>(`${this.baseUrl}`, book);
    }

    getBooks(): Observable<Book[]> { 
        return this.httpClient.get<Book[]>(`${this.baseUrl}`);
    }

    editBook(book: Book): Observable<Book> {
        return this.httpClient.put<Book>(`${this.baseUrl}/${book.id}`, book);
    }

    deleteBook(bookId: Number): Observable<void> {
        return this.httpClient.delete<void>(`${this.baseUrl}/${bookId}`);
    }
}
