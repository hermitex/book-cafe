import React, { useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import Blank from "../blank/Blank";
import Sidebar from "../sidebar/Sidebar";
import Widget from "../widget/Widget";
import BookCard from "./BookCard";
import "./home.css";

function MyBookList({ loggedUser }) {
  let location = useLocation();
  const navigate = useNavigate();

  const { state } = location;
  const [user, setUser] = useState(state);

  const [books, setBooks] = useState(null);
  const [errors, setErrors] = useState(null);
  useEffect(() => {
    async function getBooks() {
      try {
        const response = await fetch(`/users/${user.id}/books`);
        const data = await response.json();
        if (response.ok) {
          console.log(data);
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

  const handleLogout = () => {
    fetch("/logout", {
      method: "DELETE",
    }).then(() => {
      navigate("/login");
      setUser(null);
    });
  };

  return (
    <div className="wrapper">
      <div className="home-flex">
        <div className="side left">
          <Sidebar
            user={user || loggedUser}
            logout={handleLogout}
          />
        </div>
        <div
          className="widget right"
          style={{
            width: "85vw",
          }}
        >
          <div
            className="right-bottom"
            style={{ padding: "0.5rem 2rem" }}
          >
            <div
              className="my-books-title"
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                backgroundColor: "#2d2f31",
                padding: "1rem 0.5rem",
                marginBottom: "0.5rem",
              }}
            >
              <h1 style={{ color: "#fff" }}>My Books</h1>
              <NavLink to="/new-book">
                <button
                  className="btn-primary"
                  style={{ padding: "0.2rem 1.5rem", fontSize: "1rem" }}
                >
                  Add Book
                </button>
              </NavLink>
            </div>

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
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyBookList;
