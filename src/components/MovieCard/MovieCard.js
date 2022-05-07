import React from "react";
import { getImage } from "../../constants";

const imageStyle = { width: "100%", maxHeight: "100%" };
const movieStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  cursor: "pointer",
};

const MovieCard = ({ imagePath, title, data, handleMovieDetails }) => (
  <div style={movieStyle}>
    <img
      className="image"
      src={getImage("original", imagePath)}
      alt={title}
      onClick={() => handleMovieDetails(data)}
      style={imageStyle}
    />
  </div>
);

export default MovieCard;
