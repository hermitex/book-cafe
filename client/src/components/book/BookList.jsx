import React from "react";
import BookCard from "./BookCard";
import "./book.css";
import Blank from "../blank/Blank";
import useFetch from "../hooks/useFetch";

function BookList() {
  const [books, errors] = useFetch();
  return (
    <div className="book-list">
      {books && books.length === 0 ? (
        <Blank />
      ) : (
        books &&
        books.map((book) => (
          <BookCard
            key={book.id}
            book={book}
          />
        ))
      )}
    </div>
  );
}

export default BookList;
