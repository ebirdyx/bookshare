import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { BooksService } from './books.service'
import { Book } from "./book.interface";
import { CreateBookDto } from "./createBookDto";

@Controller('books')
export class BooksController {
    constructor(private readonly bookService: BooksService) {
    }

    @Get()
    public findAll(): Array<Book> {
        return this.bookService.findAll();
    }

    @Get(':id')
    public findOne(@Param('id', ParseIntPipe) id: number): Book {
        return this.bookService.findOne(id);
    }

    @Post()
    public create(@Body() createBookDto: CreateBookDto): Book {
        let book = {
            id: null,
            title: createBookDto.title
        }

        return this.bookService.create(book);
    }

    @Delete(':id')
    public delete(@Param('id', ParseIntPipe) id: number): void {
        this.bookService.delete(id);
    }
}
