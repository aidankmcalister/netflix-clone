import { useState, useEffect } from "react";
import MyCarousel from "../MyCarousel";
import MediaCard from "../MediaCard";
import { fetchMediaByGenre } from "../../api/api";

const HorrorMoviesCard = () => {
  const [horrorMovies, setHorrorMovies] = useState([]);

  useEffect(() => {
    const getHorrorMovies = async () => {
      const horrorMoviesData = await fetchMediaByGenre({
        media: "movie",
        genre: "horror",
        originalLanguage: "en",
      });
      setHorrorMovies(horrorMoviesData);
    };
    getHorrorMovies();
  }, []);

  return (
    <div>
      <h1 className="mb-2 font-bold text-xl">Horror Movies</h1>
      <MyCarousel
        content={horrorMovies.map((movie, index) => (
          <MediaCard key={index} media={movie} />
        ))}
      />
    </div>
  );
};

export default HorrorMoviesCard;
