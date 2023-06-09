import AuthorModel from "../2-models/author-model";
import BookModel from "../2-models/book-model";
import dal from "../4-utils/dal";
import { OkPacket } from "mysql";

async function getAllAuthors(): Promise<AuthorModel[]> {

    const sql = `SELECT * FROM authors`;
    const authors = await dal.execute(sql);
    return authors;
}

async function getAllBooksAndAuthors(): Promise<BookModel[]> {

    const sql = ` SELECT books.*,CONCAT(authors.firstName, ' ' ,authors.lastName) AS authorFullName
                   FROM books Join authors 
                   ON books.authorId = authors.authorId`;
    const bookAndAuthors = await dal.execute(sql);
    return bookAndAuthors;
    
}

async function getBooksBySearchText(searchText: string): Promise<BookModel[]> {

    const sql = ` SELECT books.*,CONCAT(authors.firstName, ' ' ,authors.lastName) AS authorFullName
                   FROM books Join authors 
                   ON books.authorId = authors.authorId
                   WHERE bookName LIKE ?` // % --> Wild card

    const books = await dal.execute(sql, [`%${searchText}%`]);
    
    return books;
    
}

async function addBook(book: BookModel): Promise<BookModel> {

    const sql = "INSERT INTO books VALUES(DEFAULT, ?, ?, ?, ?)";
    const result: OkPacket = await dal.execute(sql, [book.authorId, book.bookName, book.pages, book.price]);
    book.bookId = result.insertId;
    return book;

}
async function deleteBook(bookId: number): Promise<void> {

    const sql = ` DELETE FROM books WHERE bookId =?`;
    await dal.execute(sql, [bookId]);
    
}
    




export default {
    getAllAuthors,
    getAllBooksAndAuthors,
    getBooksBySearchText,
    addBook,
    deleteBook
};

