import axios from 'axios';

axios.defaults.baseURL = "https://api.themoviedb.org/3/";

axios.defaults.headers.common["Authorization"] =
  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNjg0ZjQ4ODFlZDdiZjk3ZjdjMGY2YThiNGNjMGNlOCIsIm5iZiI6MTczMzY4MDc3Ni44NTQsInN1YiI6IjY3NTVkZTg4MWUxOTRlZDZiZjMzYmI3NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Sf-0-fXxAMJc5eWTXeqqBka5nOQfhTeC_n9dUmkH_Hs";

export const fetchMoviesPop = async () => {
  const { data } = await axios.get("trending/movie/day");
  return data.results;
};

export const fetchMovieById = async (movieId) => {
  const { data } = await axios.get(`movie/${movieId}`);
  return data;
};

export const fetchMovieSearch = async (query) => {
  const { data } = await axios.get(`search/movie`, {
  params: { query },
  });
  return data;
};

export const fetchMovieCreditById = async (movieId) => {
  const { data } = await axios.get(`movie/${movieId}/credits`);
  return data.cast;
};

export const fetchMovieReviewById = async (movieId) => {
  const { data } = await axios.get(`movie/${movieId}/reviews`);
  return data.results;
};