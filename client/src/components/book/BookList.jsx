import React, { useEffect, useState } from "react";
import BookCard from "./BookCard";
import "./book.css";

function BookList() {
  const [books, setBooks] = useState(null);
  const [errors, setErrors] = useState(null);
  useEffect(() => {
    async function getBooks() {
      try {
        const response = await fetch("/books");
        const data = await response.json();
        if (response.ok) {
          setBooks(data);
        } else {
          setErrors(data.error);
        }
      } catch (error) {
        console.log(error);
      }
    }

    getBooks();
  }, []);

  return (
    <div className="book-list">
      {books &&
        books.map((book) => (
          <BookCard
            key={book.id}
            book={book}
          />
        ))}
    </div>
  );
}

export default BookList;
