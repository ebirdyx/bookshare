import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { BooksService } from './books.service'
import { Book } from "./book.entity";
import { CreateBookDto } from "./createBookDto";

@Controller('books')
export class BooksController {
    constructor(private readonly bookService: BooksService) {
    }

    @Get()
    public async findAll(): Promise<Book[]> {
        return await this.bookService.findAll();
    }

    @Get(':id')
    public findOne(@Param('id', ParseIntPipe) id: number): Promise<Book> {
        return this.bookService.findOne(id);
    }

    @Post()
    public create(@Body() createBookDto: CreateBookDto): Promise<Book> {
        let book = new Book()
        book.title = createBookDto.title
        return this.bookService.create(book);
    }

    @Delete(':id')
    public delete(@Param('id', ParseIntPipe) id: string): void {
        this.bookService.delete(id);
    }
}
