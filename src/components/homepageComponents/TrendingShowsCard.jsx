import { useEffect, useState } from "react";
import { fetchTrendingShows } from "../../api/api";
import MediaCard from "../MediaCard";
import MyCarousel from "../MyCarousel";

const TrendingShowsCard = () => {
  const [trendingShows, setTrendingShows] = useState([]);

  useEffect(() => {
    const getTrendingShows = async () => {
      const trendingShowsData = await fetchTrendingShows();
      setTrendingShows(trendingShowsData);
    };
    getTrendingShows();
  }, []);

  return (
    <div className="w-full">
      <h1 className="mb-2 font-bold text-xl">Trending Shows</h1>
      <MyCarousel
        content={trendingShows.map((show, index) => (
          <MediaCard key={index} media={show} />
        ))}
      />
    </div>
  );
};

export default TrendingShowsCard;
