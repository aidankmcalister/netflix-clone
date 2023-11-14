import { useState, useEffect } from "react";
import MyCarousel from "../MyCarousel";
import MediaCard from "../MediaCard";
import { fetchMediaByGenre } from "../../api/api";

const AnimeMoviesCard = () => {
  const [animeMovies, setAnimeMovies] = useState([]);

  useEffect(() => {
    const fetchAsianMovies = async () => {
      try {
        const options = [
          { media: "movie", genre: "animation", originalLanguage: "ja" }, // Japanese
          { media: "movie", genre: "animation", originalLanguage: "ko" }, // Korean
          { media: "movie", genre: "animation", originalLanguage: "zh" }, // Chinese
        ];

        const asianMoviesData = await Promise.all(
          options.map((option) => fetchMediaByGenre(option))
        );

        const combinedAsianMovies = asianMoviesData.flat();

        setAnimeMovies(combinedAsianMovies);
      } catch (error) {
        console.error("Error fetching Asian Movies:", error);
      }
    };

    fetchAsianMovies();
  }, []);

  return (
    <div>
      <h1 className="text-xl font-bold mb-2">Anime Movies</h1>
      <MyCarousel
        content={animeMovies.map((movie, index) => (
          <MediaCard key={index} media={movie} />
        ))}
      />
    </div>
  );
};

export default AnimeMoviesCard;
