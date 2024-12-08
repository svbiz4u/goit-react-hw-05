import { useEffect, useState } from "react";
import { fetchMoviesPop } from "../../services/api";
import MovieList from "../../components/MovieList/MovieList";


const HomePage = () => {

    const [movies, setMovies] = useState([]);
        
        useEffect(() => {
            const getMoviesPop = async () => {
                const data = await fetchMoviesPop();
                setMovies(data);
            };
            getMoviesPop();
        }, []);
            
    
      return (
        <div>
          <h2>Trending today</h2>
          {<MovieList movies={movies } />}
        </div>
      )
    }
    
    export default HomePage