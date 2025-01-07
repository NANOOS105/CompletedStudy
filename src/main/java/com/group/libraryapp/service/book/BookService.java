package com.group.libraryapp.service.book;

import com.group.libraryapp.dto.book.request.SaveBookRequest;
import com.group.libraryapp.repository.book.BookMemoryRepository;
import com.group.libraryapp.repository.book.BookRepository;
import org.springframework.stereotype.Service;

@Service
public class BookService {
    private final BookRepository bookRepository;

    public BookService(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    public void saveBook(SaveBookRequest request) {
        bookRepository.saveBook();
    }
}
