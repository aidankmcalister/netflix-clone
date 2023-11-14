import { useEffect, useState } from "react";
import { fetchTrendingMovies } from "../../api/api";
import MediaCard from "../MediaCard";
import MyCarousel from "../MyCarousel";

const TrendingCardMovies = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    const getTrendingMovies = async () => {
      const trendingMoviesData = await fetchTrendingMovies();
      setTrendingMovies(trendingMoviesData);
    };
    getTrendingMovies();
  }, []);

  return (
    <div className="w-full">
      <h1 className="mb-2 font-bold text-xl">Trending Movies</h1>
      <MyCarousel
        content={trendingMovies.map((movie, index) => (
          <MediaCard key={index} media={movie} />
        ))}
      />
    </div>
  );
};

export default TrendingCardMovies;
