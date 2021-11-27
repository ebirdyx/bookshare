import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BooksModule } from './books/books.module';
import { Book } from "./books/book.entity";


@Module({
    imports: [
        BooksModule,
        TypeOrmModule.forRoot({
            entities: [
                Book
            ]
        }),
    ],
    controllers: [],
    providers: [],
})
export class AppModule {
}
