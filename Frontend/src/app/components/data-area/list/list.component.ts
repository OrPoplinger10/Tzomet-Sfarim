import { Component } from '@angular/core';
import BookModel from 'src/app/models/book-model';
import { DataService } from 'src/app/services/data.service';
import { NotifyService } from 'src/app/services/notify.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

    public searchText: string;
    public books: BookModel[];

    public constructor(private dataService: DataService, private notifyService: NotifyService) { }

    public async search() {
        try {
            
            if(this.searchText.trim() ==="") throw new Error("Missing Text");
            this.books = await this.dataService.getBooksBySearchText(this.searchText);
            console.log(this.books);
        }
        catch(err: any) {
            this.notifyService.error(err);
        }
    }
    public async deleteThisBook(bookId: number) {

        try {
            await this.dataService.deleteBook(bookId);
            this.notifyService.success("Book deleted");
            const index = this.books.findIndex(b => b.bookId === bookId)
            this.books.splice(index, 1);

        }
        catch(err: any) {
            this.notifyService.error(err);
        }


        
    }
    
}
