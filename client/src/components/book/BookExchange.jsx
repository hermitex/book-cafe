import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { json, NavLink, useLocation, useNavigate } from "react-router-dom";

import useFetch from "../hooks/useFetch";
function BookExchange({ loggedUser }) {
  const [books] = useFetch({});
  const [bookToSend, setbookToSend] = useState({});
  const [bookToReceive, setbookToReceive] = useState({});
  const [details, setExchangeDetails] = useState({});
  const [success, setSuccess] = useState(null);
  const [errors, setErrors] = useState();
  const navigate = useNavigate();

  const [exchangeData, setexchangeData] = useState({
    sender_id: 0,
    receiver_id: 0,
    book_received_id: 0,
    book_sent_id: 0,
    return_date: "5-12-2022",
  });
  function handleChange(event) {
    let index = event.target.value;
    if (event.target.id === "receive") {
      setexchangeData({ ...exchangeData, book_received_id: index });
    } else {
      setexchangeData({ ...exchangeData, book_sent_id: index });
    }
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setexchangeData({
      ...exchangeData,
      sender_id: loggedUser.id,
      receiver_id: 7,
    });

    try {
      const response = await fetch("/exchange", {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(exchangeData),
      });
      const details = await response.json();

      if (response.ok) {
        setExchangeDetails(details);
        setSuccess("Book exchanged successfully!");
        exchangeData({
          sender_id: 0,
          receiver_id: 0,
          book_received_id: 0,
          book_sent_id: 0,
          return_date: "5-12-2022",
        });
        setTimeout(() => {
          navigate("/my-books", { state: book });
        }, 2000);
      } else {
        setErrors(details);
        console.log(details);
      }
    } catch (error) {
      console.log(error);
    }
  }

  console.log(exchangeData);

  const location = useLocation();
  const { state } = location;
  let { book } = state;
  return (
    <div>
      {errors !== null ? (
        <div
          style={{
            color: "orange",
            padding: "0.1rem",
            margin: "1rem 0",
          }}
        >
          {errors.error || errors}
        </div>
      ) : null}

      {success !== null ? (
        <div
          style={{
            color: "green",
            padding: "0.1rem",
            margin: "1rem 0",
          }}
        >
          {success}
        </div>
      ) : null}
      <form
        action=""
        onSubmit={handleSubmit}
      >
        <div
          className=""
          style={{
            display: "flex",
            flexDirection: "row",
            padding: "2rem 5rem",
            alignItems: "center",
          }}
        >
          <div className="left">
            <div
              className=""
              style={{
                textAlign: "left",
                fontSize: "1rem",
                color: "grey",
                padding: "0.5rem 0",
              }}
            >
              <label htmlFor="category">Book to Send</label>
              <select
                required
                type="select"
                onChange={handleChange}
                name="category"
                id="send"
                style={{ padding: "0.5rem", width: "100%" }}
              >
                <option
                  value=""
                  disabled
                >
                  Select Category
                </option>
                {books &&
                  books
                    .filter((book) => book.user.id === loggedUser.id)
                    .map((book) => (
                      <option
                        value={book.id}
                        key={book.id}
                      >
                        {book.title}
                      </option>
                    ))}
              </select>
            </div>
            <div
              className="left"
              style={{
                width: "40vw",
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
          </div>
          <div
            className=""
            style={{ fontSize: "3rem" }}
          >
            <i className="fa-solid fa-arrow-right-arrow-left"></i>
          </div>

          <div className="right">
            <div
              className=""
              style={{
                textAlign: "left",
                fontSize: "1rem",
                color: "grey",
                padding: "0.5rem 0",
              }}
            >
              <label htmlFor="category">Book to Receive</label>
              <select
                required
                type="select"
                onChange={handleChange}
                name="category"
                id="receive"
                style={{ padding: "0.5rem", width: "100%" }}
              >
                <option
                  value=""
                  disabled
                >
                  Select To Receive
                </option>

                {books &&
                  books
                    .filter((book) => book.user.id !== loggedUser.id)
                    .map((book) => (
                      <option
                        value={book.id}
                        key={book.id}
                      >
                        {book.title}
                      </option>
                    ))}
              </select>
            </div>
            <div
              className="left"
              style={{
                width: "40vw",
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
          </div>
        </div>
        <button
          type="submit"
          className="btn-primary"
        >
          Exchange
        </button>
      </form>
    </div>
  );
}

export default BookExchange;
