import { Injectable, NotFoundException, UnprocessableEntityException } from '@nestjs/common';
import { Book } from "./book.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { DeleteResult, Repository } from "typeorm";

@Injectable()
export class BooksService {
    constructor(
        @InjectRepository(Book)
        private booksRepository: Repository<Book>
    ) {
    }

    public async findAll(): Promise<Book[]> {
        return this.booksRepository.find();
    }

    public async findOne(id: number): Promise<Book> {
        const book: Book = await this.booksRepository
            .findOne(id);

        if (book === null) {
            throw new NotFoundException('Book not found.');
        }

        return book;
    }

    public async create(book: Book): Promise<Book> {
        const bookExists: Book = await this.booksRepository
            .findOne({title: book.title});

        if (bookExists != null) {
            throw new UnprocessableEntityException('Book title already exists.');
        }

        return await this.booksRepository.save(book);
    }

    public async delete(id: string): Promise<DeleteResult> {
        const bookExists: Book = await this.booksRepository
            .findOne(id);

        if (bookExists == null) {
            throw new NotFoundException('Book not found.');
        }

        return await this.booksRepository.delete(id);
    }
}
