import React from "react";
import { getImage } from "../constants";

const movieStyle = {
  display: "flex",
  jusifyContent: "center",
  alignItems: "center",
  cursor: "pointer",
};

const imageStyle = { width: "100%", maxHeight: "100%" };

const MovieCard = ({ imagePath, title, data, handleMovieDetails }) => (
  <div style={movieStyle}>
    <img
      className="poster"
      src={getImage("original", imagePath)}
      alt={title}
      onClick={() => handleMovieDetails(data)}
      style={imageStyle}
    />
  </div>
);

export default MovieCard;
