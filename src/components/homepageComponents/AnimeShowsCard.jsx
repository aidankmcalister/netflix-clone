import { useState, useEffect } from "react";
import MyCarousel from "../MyCarousel";
import MediaCard from "../MediaCard";
import { fetchMediaByGenre } from "../../api/api";

const AnimeShowsCard = () => {
  const [animeShows, setAnimeShows] = useState([]);

  useEffect(() => {
    const fetchAsianShows = async () => {
      try {
        const options = [
          { media: "tv", genre: "animation", originalLanguage: "ja" }, // Japanese
          { media: "tv", genre: "animation", originalLanguage: "ko" }, // Korean
          { media: "tv", genre: "animation", originalLanguage: "zh" }, // Chinese
        ];

        const asianShowsData = await Promise.all(
          options.map((option) => fetchMediaByGenre(option))
        );

        const combinedAsianShows = asianShowsData.flat();

        setAnimeShows(combinedAsianShows);
      } catch (error) {
        console.error("Error fetching Asian shows:", error);
      }
    };

    fetchAsianShows();
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
