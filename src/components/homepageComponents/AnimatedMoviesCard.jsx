import { useState, useEffect } from "react";
import MyCarousel from "../MyCarousel";
import MediaCard from "../MediaCard";
import { fetchMediaByGenre } from "../../api/api";

const AnimatedMoviesCard = () => {
  const [animatedMovies, setAnimatedMovies] = useState([]);

  useEffect(() => {
    const getAnimatedMovies = async () => {
      const animatedMoviesData = await fetchMediaByGenre({
        media: "movie",
        genre: "animation",
        originalLanguage: "en",
      });
      setAnimatedMovies(animatedMoviesData);
    };
    getAnimatedMovies();
  }, []);

  return (
    <div>
      <h1 className="mb-2 font-bold text-xl">Animated Movies</h1>
      <MyCarousel
        content={animatedMovies.map((movie, index) => (
          <MediaCard key={index} media={movie} />
        ))}
      />
    </div>
  );
};

export default AnimatedMoviesCard;
