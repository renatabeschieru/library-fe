import { Component, OnInit } from "@angular/core";
import { BookService } from "../book.service";
import { Observable, Subscription } from "rxjs";


@Component({
    selector: 'search-book',
    templateUrl: './search-book.component.html',
    styleUrls: ['./search-book.component.scss']
})
export class SearchBookComponent implements OnInit {

    private subscription: Subscription = new Subscription();
    public author: string = '';
    public nrOfBooks$: Observable<number> = new Observable<number>();

    constructor(private bookService: BookService) { }

    ngOnInit() {
        this.bookService.counted$.subscribe((author) => {
            this.nrOfBooks$ = this.bookService.countByAuthor(author);
        })
    }

    onSearch() {
        this.bookService.searchBookSubject.next(this.author);
        this.bookService.countNrOfBooksByAuthor.next(this.author);
    }

}