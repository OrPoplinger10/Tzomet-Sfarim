import { Component } from '@angular/core';
import BookModel from 'src/app/models/book-model';
import { DataService } from 'src/app/services/data.service';
import { NotifyService } from 'src/app/services/notify.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
  
})
export class BooksComponent {

  public books: BookModel[];

  public constructor(private dataService: DataService, private notifyService: NotifyService) { }

     public async ngOnInit() {
      try{

       this.books = await this.dataService.getAllBooksAndAuthors();

      }
      catch (err: any) {
        this.notifyService.error(err);
      }

     }
     
}


