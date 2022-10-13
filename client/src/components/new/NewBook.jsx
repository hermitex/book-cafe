import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Copyright from "../Copyright/Copyright";
import Sidebar from "../sidebar/Sidebar";
import useUserAuth from "../utils/useUserAuth";
import "./Signup.css";

const NewBook = () => {
  const [user, endSession] = useUserAuth();
  const [data, setData] = useState({
    user_id: user && user.id,
    title: "",
    category: "",
    cover_image: "",
    author: "",
    condition: "",
    is_available: true,
  });

  const [book, setBook] = useState(null);
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name } = event.target;
    const { value } = event.target;
    setData({ ...data, [name]: value });
  };

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
        navigate("/book-details", { state: book });
        setData({
          user_id: "",
          title: "",
          category: "",
          cover_image: "",
          author: "",
          condition: "",
          is_available: "",
        });
        console.log(user);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="home-flex">
      <div className="side left">
        <Sidebar
          user={user}
          logout={endSession}
        />
      </div>
      <div
        className="widget right"
        style={{
          width: "85vw",
        }}
      >
        <div className="inner-wrapper">
          <div className="sign">
            <h1>Add Book</h1>
          </div>

          <div className="form">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="title"
                placeholder="Enter book title................"
                required
                onChange={handleChange}
                value={data.title}
              />

              <select
                name="category"
                id=""
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
              <input
                type="url"
                name="cover_image"
                placeholder="Enter book cover............"
                required
                onChange={handleChange}
                value={data.cover_image}
              />
              <input
                type="text"
                name="author"
                placeholder="Enter author name..........."
                required
                onChange={handleChange}
                value={data.author}
              />
              <select
                name="condition"
                id=""
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
              <div className="">
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

              <div className="button">
                <button
                  type="submit"
                  className="btn btn-primary"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
          <div className="text bg-red-900">
            <small>
              Register your book and swap it with a new one or perhaps create a
              new book lover. <br></br>Participating in a book exchange also
              saves on ink and leaves a smaller environmental footprint than
              printing a book.
            </small>
          </div>

          <Copyright />
        </div>
      </div>
    </div>
  );
};

export default NewBook;
