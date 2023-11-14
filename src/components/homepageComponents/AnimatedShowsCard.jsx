import { useState, useEffect } from "react";
import MyCarousel from "../MyCarousel";
import MediaCard from "../MediaCard";
import { fetchMediaByGenre } from "../../api/api";

const AnimatedShowsCard = () => {
  const [animatedShows, setAnimatedShows] = useState([]);

  useEffect(() => {
    const getAnimatedShows = async () => {
      const animatedShowsData = await fetchMediaByGenre({
        media: "tv",
        genre: "animation",
        originalLanguage: "en",
      });
      setAnimatedShows(animatedShowsData);
    };
    getAnimatedShows();
  }, []);

  return (
    <div>
      <h1 className="mb-2 font-bold text-xl">Animated Shows</h1>
      <MyCarousel
        content={animatedShows.map((show, index) => (
          <MediaCard key={index} media={show} />
        ))}
      />
    </div>
  );
};

export default AnimatedShowsCard;
