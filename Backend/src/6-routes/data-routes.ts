import express, { Request, Response, NextFunction } from "express";
import dataService from "../5-services/data-service";
import BookModel from "../2-models/book-model";

const router = express.Router();


router.get("/authors", async (request: Request, response: Response, next: NextFunction) => {
    try {

        const authors = await dataService.getAllAuthors();
        response.json(authors)

    }
    catch(err: any) {
        next(err);
    }
});

router.get("/books-and-authors", async (request: Request, response: Response, next: NextFunction) => {
    try {

        const bookAndAuthors = await dataService.getAllBooksAndAuthors();
        response.json(bookAndAuthors)

    }
    catch(err: any) {
        next(err);
    }
});

router.get("/books-by-search-text/:searchText", async (request: Request, response: Response, next: NextFunction) => {
    try {

        const searchText = request.params.searchText;
        const books = await dataService.getBooksBySearchText(searchText);
        response.json(books);
        
    }
    catch(err: any) {
        next(err);
    }
});

router.post("/books", async (request: Request, response: Response, next: NextFunction) => {
    try {

        const book = new BookModel(request.body);
        const addedBook = await dataService.addBook(book);
        response.status(201).json(addedBook);
        
    }
    catch(err: any) {
        next(err);
    }
});

router.delete("/books/:bookId([0-9]+)", async (request: Request, response: Response, next: NextFunction) => {
    try {

        const bookId = +request.params.bookId;
        await dataService.deleteBook(bookId);
        response.sendStatus(204);
        
    }
    catch(err: any) {
        next(err);
    }
});


export default router;
