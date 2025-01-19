import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookTableComponent } from './book/book-table/book-table.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule, HttpContext } from '@angular/common/http'
import { AddBookComponent } from './book/add-book/add-book.component';
import { FormsModule } from '@angular/forms';
import { EditBookComponent } from './book/edit-book/edit-book.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent, 
    BookTableComponent,
    HomeComponent,
    AddBookComponent, 
    EditBookComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
