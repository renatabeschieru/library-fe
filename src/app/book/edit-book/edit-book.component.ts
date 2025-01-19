import { Component, OnInit, OnDestroy, NgModule, Input, Output, EventEmitter, Inject } from '@angular/core';
import { Subscription } from 'rxjs'
import { BookService } from '../book.service';
import { Book } from '../book.interface';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
    selector: 'edit-book',
    templateUrl: './edit-book.component.html',
    styleUrls: ['./edit-book.component.scss']
})
export class EditBookComponent {
    private subscription: Subscription = new Subscription();
    public editBook: Book = {
        id: 0,
        title: '',
        author: '',
        isbn: '',
        publicationDate: ''
      };
    
    constructor(
        private bookService: BookService,
        public dialogRef: MatDialogRef<EditBookComponent>,
        @Inject(MAT_DIALOG_DATA) public data: { book: Book },
    ) { 
        this.editBook = { ...data.book};
    }

    onSubmit() {
        this.bookService.editBook(this.editBook).subscribe(response => {
            this.bookService.bookEditedSubject.next();
            this.close();
        });
    }

    close() {
        this.dialogRef.close();
    }

}