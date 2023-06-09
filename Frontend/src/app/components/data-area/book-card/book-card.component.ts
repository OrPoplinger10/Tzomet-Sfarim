import { Component, EventEmitter, Input, Output } from '@angular/core';
import BookModel from 'src/app/models/book-model';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.css']
})
export class BookCardComponent {

@Input()
public book: BookModel;

@Output()
public deleteMe = new EventEmitter<number>(); // deleteMe is a event name

public async deleteBook() {
    this.deleteMe.emit(this.book.bookId)

}

}
