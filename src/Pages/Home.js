import React from "react";

import { Container, Grid } from "@mui/material";
import MovieCard from "../components/MovieCard";
import axios from "axios";
import { topRatedUrl } from "../constants";
import MovieDescription from "../components/MoveiDescription/MovieDescription";

const Home = () => {
  const [data, setData] = React.useState([]);
  const [showMovieDetails, setShowMovieDetails] = React.useState(false);
  const [movieData, setMovieData] = React.useState("");

  const topRatedMovies = async () => {
    try {
      const result = await axios.get(topRatedUrl);
      if (result) {
        setData(result?.data?.results);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleMovieDetails = (details) => {
    setShowMovieDetails(true);
    setMovieData(details);
  };

  const handleClose = () => {
    setShowMovieDetails(false);
    setMovieData("");
  };

  React.useEffect(() => {
    topRatedMovies();
  }, []);

  return (
    <Container style={{ maxWidth: 600 }}>
      <Grid container spacing={1}>
        {!showMovieDetails ? (
          data.map((item) => (
            <Grid item xs={6} md={4} key={item.id}>
              <MovieCard
                imagePath={item.poster_path}
                title={item.title}
                data={item}
                handleMovieDetails={handleMovieDetails}
              />
            </Grid>
          ))
        ) : (
          <MovieDescription movieData={movieData} onClose={handleClose} />
        )}
      </Grid>
    </Container>
  );
};

export default Home;
