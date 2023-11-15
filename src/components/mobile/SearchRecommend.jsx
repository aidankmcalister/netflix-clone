import { useState, useEffect } from "react";
import { fetchRecommendedMoviesAndShows } from "../../api/api";
import { PlayCircleIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const SearchRecommend = () => {
  const [recommendedMedia, setRecommendedMedia] = useState([]);

  useEffect(() => {
    const getRecommendedMedia = async () => {
      try {
        const recommendedMediaData = await fetchRecommendedMoviesAndShows();
        setRecommendedMedia(recommendedMediaData);
      } catch (error) {
        console.error("Error fetching recommended media:", error);
      }
    };
    getRecommendedMedia();
  }, []);

  return (
    <div className="mt-2">
      <h1 className="font-semibold text-lg">Recommended TV Shows & Movies</h1>
      <div>
        {recommendedMedia.map((media, index) => (
          <Link
            to={{
              pathname: `/content/${media.id}`,
              search: `?mediaObject=${JSON.stringify(media)}`,
            }}
          >
            <div key={index} className="flex w-full mb-4">
              <img
                src={`http://image.tmdb.org/t/p/w500/${media.backdrop_path}`}
                className="w-1/2"
              />
              <div className="flex justify-between items-center w-full">
                <h3 className="font-bold ml-4">{media.name || media.title}</h3>
                <PlayCircleIcon className="w-8" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SearchRecommend;
