import React from "react";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function BookCard({ book }) {
  return (
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
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}

export default BookCard;
