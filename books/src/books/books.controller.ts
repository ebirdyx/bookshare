import { Controller, Get } from '@nestjs/common';
import { BooksService } from './books.service'
import { Book } from "./book.interface";

@Controller('books')
export class BooksController {
    constructor(private readonly bookService: BooksService) {}

    @Get()
    public findAll(): Array<Book> {
        return this.bookService.findAll();
    }
}
