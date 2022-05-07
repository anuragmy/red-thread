import React from "react";
import { getImage } from "../../constants";
import "./style.css";

const MovieDescription = ({ movieData, onClose }) => {
  return (
    <div className="wrapper">
      <div className="description">
        <img src={getImage("w185", movieData?.poster_path)} />

        <div className="moviedata">
          <div className="content">
            <p className="title">
              {movieData?.name || movieData?.original_title}
            </p>

            <p>
              {movieData?.release_date?.substring(0, 4) ||
                "Unknown Release Date"}
            </p>
            <p>{movieData?.vote_average}/10</p>
          </div>

          <button className="favourite">Add to favourite</button>
        </div>
      </div>
      <div className="details">{movieData?.overview}</div>
      <button className="favourite" onClick={onClose}>
        Back
      </button>
    </div>
  );
};

export default MovieDescription;
