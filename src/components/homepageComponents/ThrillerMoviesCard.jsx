import { useState, useEffect } from "react";
import MyCarousel from "../MyCarousel";
import MediaCard from "../MediaCard";
import { fetchMediaByGenre } from "../../api/api";

const ThrillerMoviesCard = () => {
  const [thrillerMovies, setThrillerMovies] = useState([]);

  useEffect(() => {
    const getThrillerMovies = async () => {
      try {
        const thrillerMoviesData = await fetchMediaByGenre({
          media: "movie",
          genre: "thriller",
          originalLanguage: "en",
        });
        setThrillerMovies(thrillerMoviesData);
      } catch (error) {
        console.error("Error fetching thriller movies:", error);
      }
    };
    getThrillerMovies();
  }, []);

  return (
    <div>
      <h1 className="mb-2 font-bold text-xl">Thriller Movies</h1>
      <MyCarousel
        content={thrillerMovies.map((movie, index) => (
          <MediaCard key={index} media={movie} />
        ))}
      />
    </div>
  );
};

export default ThrillerMoviesCard;
