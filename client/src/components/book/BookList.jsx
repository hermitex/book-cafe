import React from "react";
import BookCard from "./BookCard";
import "./book.css";
import Blank from "../blank/Blank";
import useFetch from "../hooks/useFetch";

function BookList() {
  let [books, errors] = useFetch();
  function handleDelete(id) {
    const booksToShow = books && books.filter((book) => book.id !== id);
    books = booksToShow;
  }

  return (
    <div className="book-list">
      {books && books.length === 0 ? (
        <Blank />
      ) : (
        books &&
        books.map((book) => (
          <BookCard
            onDelete={handleDelete}
            key={book.id}
            book={book}
          />
        ))
      )}
    </div>
  );
}

export default BookList;
