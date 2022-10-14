import React from "react";
import { NavLink, useLocation } from "react-router-dom";

function BookDetails() {
  const location = useLocation();
  const { state } = location;
  let { book } = state;
  book === null ? (book = state) : (book = book);
  console.log(book);
  return (
    <div className="wrapper">
      <div
        className=""
        style={{ backgroundColor: "#c4c4c4", padding: "1rem 0" }}
      >
        <h1>{book.title}</h1>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          padding: "3rem 5rem",
          gap: "2rem",
        }}
      >
        <div
          className="left"
          style={{
            width: "50vw",
            backgroundColor: "#c4c4c4",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            borderRadius: "1rem",
            padding: "1rem 1.5rem",
            gap: "2rem",
          }}
        >
          <img
            style={{
              width: "50%",
            }}
            src={book.cover_image}
            alt={book.title}
          />

          <div
            className="book-details top"
            style={{}}
          >
            <p>Book Details</p>
            <div
              className=""
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                height: "90%",
              }}
            >
              <div
                className="card"
                style={{ width: "20rem", textAlign: "left" }}
              >
                <div
                  className=""
                  style={{
                    borderBottom: "0.1rem solid #fff",
                    padding: "0.5rem 0",
                    width: "100%",
                  }}
                >
                  <h2 style={{ color: "#555" }}>Category</h2>
                  <p>{book.category}</p>
                </div>
                <div
                  className=""
                  style={{
                    borderBottom: "0.1rem solid #fff",
                    padding: "0.5rem 0",
                    width: "100%",
                  }}
                >
                  <h2 style={{ color: "#555" }}>Author(s)</h2>
                  <p>{book.author}</p>
                </div>
                <div
                  className=""
                  style={{
                    borderBottom: "0.1rem solid #fff",
                    padding: "0.5rem 0",
                    width: "100%",
                  }}
                >
                  <h2 style={{ color: "#555" }}>Condition</h2>
                  <p>{book.condition}</p>
                </div>

                <div
                  className=""
                  style={{
                    borderBottom: "0.1rem solid #fff",
                    padding: "0.5rem 0",
                    width: "100%",
                  }}
                >
                  <h2 style={{ color: "#555" }}>Availability</h2>
                  <p>
                    {book.is_available
                      ? "It is available for exchange"
                      : "It is not available for exchange"}
                  </p>
                </div>
              </div>
              <div className="action">
                {book.is_available ? (
                  <button
                    className="btn-primary"
                    style={{ fontSize: "1rem", padding: "0.7rem" }}
                  >
                    <NavLink>Exchange</NavLink>
                  </button>
                ) : (
                  <button
                    className="btn-primary"
                    style={{ fontSize: "1rem", padding: "0.7rem" }}
                  >
                    <NavLink>Explore Similar Books</NavLink>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        <div
          className="right"
          style={{
            width: "30vw",
            backgroundColor: "#c4c4c4",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            borderRadius: "1rem",
            padding: "1rem 1.5rem",
            gap: "2rem",
          }}
        >
          <div className="book-details top">
            <p>Owner Details</p>

            <div
              className=""
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                height: "90%",
              }}
            >
              <div
                className="card"
                style={{ width: "20rem", textAlign: "left" }}
              >
                <div
                  className=""
                  style={{
                    borderBottom: "0.1rem solid #fff",
                    padding: "0.5rem 0",
                    width: "100%",
                    padding: "2rem 0",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                  }}
                >
                  <div
                    className="avatar-container"
                    style={{
                      width: "3rem",
                      height: "3rem",
                      backgroundColor: "grey",
                      borderRadius: "100%",
                      textAlign: "center",
                      display: "flex",
                      flexDirection: "column",
                      gap: "2rem",
                    }}
                  >
                    <img
                      style={{
                        width: "100%",
                        height: "100%",
                      }}
                      src=""
                      alt={book.user.username.split("")[0].toUpperCase()}
                    />
                    <small>{book.user.username}</small>
                  </div>
                </div>

                <div
                  className=""
                  style={{
                    borderBottom: "0.1rem solid #fff",
                    padding: "0.5rem 0",
                    width: "100%",
                  }}
                >
                  <div className="card">
                    <div className="">
                      <div
                        style={{
                          borderBottom: "0.1rem solid #fff",
                          padding: "0.5rem 0",
                          width: "100%",
                        }}
                      >
                        <h2 style={{ color: "#555" }}>Email</h2>

                        <p>{book.user.email}</p>
                      </div>
                      <div
                        style={{
                          borderBottom: "0.1rem solid #fff",
                          padding: "0.5rem 0",
                          width: "100%",
                        }}
                      >
                        <h2 style={{ color: "#555" }}>Phone</h2>
                        <p>{book.user.phone}</p>
                      </div>
                      <div>
                        <h2 style={{ color: "#555" }}>Location</h2>
                        <p>{book.user.location}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="action">
                <button
                  className="btn-primary"
                  style={{ fontSize: "1rem", padding: "0.7rem" }}
                >
                  <a href={`mailto: ${book.user.email}`}>Send Email</a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="book-reviews"
        style={{
          width: "100%",
          padding: "0 5rem",
          marginBottom: "2rem",
        }}
      >
        <div className="h1">Reviews</div>
        <p>The book has {book.reviews.length} reviews</p>
      </div>
    </div>
  );
}

export default BookDetails;
