import React, { useEffect, useState } from "react";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { NavLink, useNavigate } from "react-router-dom";
import useUserAuth from "../utils/useUserAuth";

function BookCard({ book, onDelete }) {
  const [errors, setErrors] = useState(null);
  const [success, setSuccess] = useState(null);
  const [status, setStatus] = useState(null);
  const navigate = useNavigate();
  async function handleDelete(id) {
    try {
      const response = await fetch(`/books/${id}`, {
        method: "DELETE",
      });
      if (response.status === 404) {
        setSuccess("Book deleted successfully!");
        setTimeout(() => {
          navigate("/home");
        }, 2000);
      } else {
        setErrors(response);
      }
    } catch (error) {
      console.log(error);
    }
  }

  const [user, setUser] = useUserAuth();

  return (
    <div className="">
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

      <Card sx={{ maxWidth: 300 }}>
        <CardMedia
          component="img"
          height="250"
          image={book.cover_image}
          width="cover"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            style={{ textAlign: "left" }}
          >
            {book.title}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            style={{ textAlign: "left" }}
          >
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <NavLink
            to={{ pathname: "/exchange" }}
            state={{ book }}
          >
            <Button size="small"> Exchange</Button>
          </NavLink>

          {user && user.id > 0 ? (
            <>
              <NavLink
                to={{ pathname: "/edit" }}
                state={{ book }}
              >
                <Button size="small">Edit</Button>
              </NavLink>

              <Button
                onClick={() => handleDelete(book.id)}
                size="small"
              >
                Delete
              </Button>
            </>
          ) : (
            <NavLink
              to={{ pathname: "/book-details" }}
              state={{ book }}
            >
              <Button size="small">Learn more</Button>
            </NavLink>
          )}
        </CardActions>
      </Card>
    </div>
  );
}

export default BookCard;
