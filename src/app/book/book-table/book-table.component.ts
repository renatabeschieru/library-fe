import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs'
import { BookService } from '../book.service';
import { Book } from '../book.interface';
import { EditBookComponent } from '../edit-book/edit-book.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
    selector: 'book-table',
    templateUrl: './book-table.component.html',
    styleUrls: ['./book-table.component.scss']
})
export class BookTableComponent implements OnInit, OnDestroy {
    
    private subscription: Subscription = new Subscription();
    public books: Book[] = [];

    constructor(
        private bookService: BookService,
        private dialog: MatDialog,
    ) { }

    ngOnInit(): void {
        this.subscription.add(
            this.bookService.getBooks().subscribe((booksResponse) => {
                this.books = booksResponse;
            })
        );

        this.subscription.add(
            this.bookService.bookAdded$.subscribe((bookId) => {
                this.bookService.getBooks().subscribe((booksResponse) => {
                    this.books = booksResponse;
                });
            })
        );

        this.subscription.add(
            this.bookService.bookDeleted$.subscribe(() => {
                this.bookService.getBooks().subscribe((booksResponse) => {
                    this.books = booksResponse;
                });
            })
        );

        this.subscription.add(
            this.bookService.bookEdited$.subscribe(() => {
                this.bookService.getBooks().subscribe((booksResponse) => {
                    this.books = booksResponse;
                });
            })
        );
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

    public editBook(book: Book): void {
        this.dialog.open(EditBookComponent, {
            data: { book: book }
        });
    }

    public deleteBook(book: Number): void {
        this.bookService.deleteBook(book).subscribe(() => {
            this.bookService.bookDeletedSubject.next();
        });
    }
}