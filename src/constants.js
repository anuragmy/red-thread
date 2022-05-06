export const topRatedUrl = `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}`;
export const getImage = (size, imagePath) =>
  `https://image.tmdb.org/t/p/${size}${imagePath}`;
