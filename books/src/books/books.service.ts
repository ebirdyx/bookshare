import { Injectable, NotFoundException, UnprocessableEntityException } from '@nestjs/common';
import { Book } from "./book.interface";

const NOT_FOUND: number = -1;

@Injectable()
export class BooksService {
    private books: Array<Book> = [];

    public findAll(): Array<Book> {
        return this.books;
    }

    public findOne(id: number): Book {
        const book: Book = this.books
            .find(book => book.id === id);

        if (book === null) {
            throw new NotFoundException('Book not found.');
        }

        return book;
    }

    public create(book: Book): Book {
        const titleExists: boolean = this.books
            .some(item => item.title === book.title);

        if (titleExists) {
            throw new UnprocessableEntityException('Book title already exists.');
        }

        book.id = this.books.length;
        this.books.push(book);
        return book;
    }

    public delete(id: number): void {
        const index: number = this.books
            .findIndex(book => book.id === id);

        if (index === NOT_FOUND) {
            throw new NotFoundException('Book not found.');
        }

        this.books.splice(index, 1);
    }
}
