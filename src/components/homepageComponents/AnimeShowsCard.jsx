import { useState, useEffect } from "react";
import MyCarousel from "../MyCarousel";
import MediaCard from "../MediaCard";
import { fetchAnime } from "../../api/api";

const AnimeShowsCard = () => {
  const [animeShows, setAnimeShows] = useState([]);

  useEffect(() => {
    const fetchAnimeShows = async () => {
      try {
        const animeShowData = await fetchAnime("anime");
        setAnimeShows(animeShowData);
      } catch (error) {
        console.error("Error fetching anime shows:", error);
      }
    };

    fetchAnimeShows();
  }, []);

  return (
    <div>
      <h1 className="text-xl font-bold mb-2">Anime TV Shows</h1>
      <MyCarousel
        content={animeShows.map((show) => (
          <MediaCard key={show.id} media={show} />
        ))}
      />
    </div>
  );
};

export default AnimeShowsCard;
