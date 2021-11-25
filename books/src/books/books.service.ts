import { Injectable } from '@nestjs/common';
import { Book } from "./book.interface";

@Injectable()
export class BooksService {
    private books: Array<Book> = [];

    public findAll(): Array<Book> {
        return this.books;
    }
}
