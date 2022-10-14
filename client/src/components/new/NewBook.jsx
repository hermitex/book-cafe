import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Copyright from "../Copyright/Copyright";
import Sidebar from "../sidebar/Sidebar";
import useUserAuth from "../utils/useUserAuth";
import "./Signup.css";

const NewBook = ({ loggedUser }) => {
  const [errors, setErrors] = useState(null);
  const [success, setSuccess] = useState(null);
  const [user, endSession] = useUserAuth();
  const [activeUser, setActiveUser] = useState();
  const [data, setData] = useState({
    user_id: 0,
    title: "",
    category: "",
    cover_image: "",
    author: "",
    condition: "",
    is_available: true,
  });

  const [book, setBook] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => setActiveUser(user));
      }
    });
  }, []);

  const handleChange = (event) => {
    const { name } = event.target;
    let { value } = event.target;
    if (event.target.type === "radio") {
      if (event.target.id === "yes") {
        value = true;
      } else {
        value = false;
      }
    }
    setData({ ...data, user_id: user.id, [name]: value });
  };
  console.log(data);
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("/books", {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        const book = await response.json();
        setBook(book);
        if (response.ok) {
          setSuccess("Book added successfully!");
          setData({
            user_id: "",
            title: "",
            category: "",
            cover_image: "",
            author: "",
            condition: "",
            is_available: "",
          });
          setTimeout(() => {
            navigate("/book-details", { state: book });
          }, 2000);
        } else {
          setErrors(book);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="home-flex">
      <div className="side left">
        <Sidebar
          user={activeUser || loggedUser}
          logout={endSession}
        />
      </div>
      <div
        className="widget right"
        style={{
          width: "85vw",
          display: "flex",
          flaxDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="inner-wrapper">
          <div className="sign">
            {errors !== null ? (
              <div
                style={{
                  color: "orange",
                  padding: "0.1rem",
                  margin: "1rem 0",
                }}
              >
                {errors.error}
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
            <h2>Add Book</h2>
          </div>

          <div className="form">
            <form
              onSubmit={handleSubmit}
              style={{
                display: "flex",
                flexDirection: "column",
                width: "60%",
              }}
            >
              <fieldset style={{ border: "1px solid", padding: "1rem" }}>
                <legend>Book Details</legend>
                <div
                  className=""
                  style={{
                    textAlign: "left",
                    fontSize: "1rem",
                    color: "grey",
                    padding: "0.5rem 0",
                  }}
                >
                  <label htmlFor="title">Book Title</label>
                  <input
                    style={{ padding: "0.5rem", width: "100%" }}
                    id="title"
                    type="text"
                    name="title"
                    placeholder="Enter book title................"
                    required
                    onChange={handleChange}
                    value={data.title}
                  />
                </div>
                <div
                  className=""
                  style={{
                    textAlign: "left",
                    fontSize: "1rem",
                    color: "grey",
                    padding: "0.5rem 0",
                  }}
                >
                  <label htmlFor="cover_image">Cover Image</label>
                  <input
                    id="cover_image"
                    style={{ padding: "0.5rem", width: "100%" }}
                    type="url"
                    name="cover_image"
                    placeholder="Enter book cover............"
                    required
                    onChange={handleChange}
                    value={data.cover_image}
                  />
                </div>
                <div
                  className=""
                  style={{
                    textAlign: "left",
                    fontSize: "1rem",
                    color: "grey",
                    padding: "0.5rem 0",
                  }}
                >
                  <label htmlFor="author">Book Author</label>
                  <input
                    id="author"
                    style={{ padding: "0.5rem", width: "100%" }}
                    type="text"
                    name="author"
                    placeholder="Enter author name..........."
                    required
                    onChange={handleChange}
                    value={data.author}
                  />
                </div>
                <div
                  className="select"
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    gap: "0.5rem",
                  }}
                >
                  <div className="">
                    <div
                      className=""
                      style={{
                        textAlign: "left",
                        fontSize: "1rem",
                        color: "grey",
                        padding: "0.5rem 0",
                      }}
                    >
                      <label htmlFor="category">Book Category</label>
                      <select
                        type="select"
                        onChange={handleChange}
                        name="category"
                        id="category"
                        style={{ padding: "0.5rem", width: "100%" }}
                      >
                        <option
                          value=""
                          disabled
                        >
                          Select Category
                        </option>
                        <option value="Fiction">Fiction</option>
                        <option value="Fantasy">Fantasy</option>
                        <option value="Dystopian">Dystopian</option>
                        <option value="Mystery">Mystery</option>
                        <option value="Horror">Horror</option>
                        <option value="Romance">Romance</option>
                      </select>
                    </div>
                  </div>
                  <div className="">
                    <div
                      className=""
                      style={{
                        textAlign: "left",
                        fontSize: "1rem",
                        color: "grey",
                        padding: "0.5rem 0",
                      }}
                    >
                      <label htmlFor="condition">Book Condition</label>
                      <select
                        type="select"
                        onChange={handleChange}
                        name="condition"
                        id="condition"
                        style={{ padding: "0.5rem", width: "100%" }}
                      >
                        <option
                          value=""
                          disabled
                        >
                          Select Condition
                        </option>
                        <option value="New">New</option>
                        <option value="Used">Used</option>
                        <option value="Old">Old</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div
                  className=""
                  style={{
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  <fieldset
                    style={{
                      border: "1px solid",
                      padding: "1rem",
                      width: "100%",
                    }}
                  >
                    <legend>Available for exchange?</legend>

                    <div
                      className=""
                      style={{ display: "flex" }}
                    >
                      <label for="yes">Yes</label>
                      <input
                        type="radio"
                        id="yes"
                        name="is_available"
                        value={data.is_available}
                        onChange={handleChange}
                      />
                      <label for="no">No</label>
                      <br />
                      <input
                        type="radio"
                        id="no"
                        name="is_available"
                        value={data.is_available}
                        onChange={handleChange}
                      />
                    </div>
                  </fieldset>
                </div>

                <div className="button">
                  <button
                    type="submit"
                    className="btn btn-primary"
                  >
                    Submit
                  </button>
                </div>
              </fieldset>
            </form>
          </div>
          <Copyright />
        </div>
      </div>
    </div>
  );
};

export default NewBook;
