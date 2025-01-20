import { Component, OnInit } from "@angular/core";
import { BookService } from "../book.service";
import { Subscription } from "rxjs";


@Component({
    selector: 'search-book',
    templateUrl: './search-book.component.html',
    styleUrls: ['./search-book.component.scss']
})
export class SearchBookComponent implements OnInit {

    private subscription: Subscription = new Subscription();
    public author: string = '';

    constructor(private bookService: BookService) { }

    ngOnInit() {
    }

    onSearch() {
        this.bookService.searchBookSubject.next(this.author);
    }

}