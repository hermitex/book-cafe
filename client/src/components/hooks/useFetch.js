import { useEffect, useState } from "react";

function useFetch() {
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
  return [books, errors];
}

export default useFetch;
