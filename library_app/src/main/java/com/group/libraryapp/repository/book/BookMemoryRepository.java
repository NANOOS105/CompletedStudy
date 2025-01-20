package com.group.libraryapp.repository.book;

import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Repository;

@Repository
@Primary
public class BookMemoryRepository implements BookRepository {
    //private final List<String> books = new ArrayList<>();

    @Override
    public void saveBook() {
        System.out.println("Memory Repository");
    }
}
