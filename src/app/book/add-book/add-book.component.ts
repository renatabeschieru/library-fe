import { Component, OnInit, OnDestroy, NgModule } from '@angular/core';
import { Subscription } from 'rxjs'
import { BookService } from '../book.service';
import { Book } from '../book.interface';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';



@Component({
    selector: 'add-book',
    templateUrl: './add-book.component.html',
    styleUrls: ['./add-book.component.scss']
})
export class AddBookComponent implements OnInit, OnDestroy {

    private subscription: Subscription = new Subscription();

    public book: Book = {
        id: 0,
        title: '',
        author: '',
        isbn: '',
        publicationDate: ''
      };

    constructor(
        private bookService: BookService,
    ) { }

    ngOnInit(): void {
        // nothing for now
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

    onSubmit() {
        this.bookService.addBook(this.book).subscribe(response => {
            this.bookService.bookAddedSubject.next(response);
        });
    }

}