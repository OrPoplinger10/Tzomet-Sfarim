class BookModel {

    public bookId: number;
    public authorId: number;
    public bookName: string;
    public pages: number;
    public price: number;

    public constructor(book: BookModel) {

        this.bookId= book.bookId;
        this.authorId= book.authorId;
        this.bookName= book.bookName;
        this.pages= book.pages;
        this.price= book.price;
    }

}

export default BookModel