import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRandomContinueWatching } from "../../api/api";

import {
  addToFavorites,
  removeFromFavorites,
  selectFavorites,
} from "../../redux/favoritesSlice";

const ContinueCarousel = ({ content }) => {
  return (
    <div className="row">
      <div className="row__posters p-4">{content}</div>
    </div>
  );
};

const ContinueWatchingCard = () => {
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);
  const [continueWatching, setContinueWatching] = useState([]);

  useEffect(() => {
    const getContinued = async () => {
      const continueWatchingData = await fetchRandomContinueWatching();
      setContinueWatching(
        continueWatchingData.map((media) => ({
          ...media,
          progressBarWidth: generateRandomWidth(),
        }))
      );
    };
    getContinued();
  }, []);

  function generateRandomWidth() {
    return Math.floor(Math.random() * 81) + 15;
  }

  const handleBookmarkClick = (media) => {
    const isFavorite = favorites.some((favorite) => favorite.id === media.id);
    if (isFavorite) {
      dispatch(removeFromFavorites(media.id));
    } else {
      dispatch(addToFavorites(media));
    }
  };

  return (
    <div className="">
      <h1 className="text-xl font-bold mb-2">Continue Watching</h1>
      <ContinueCarousel
        content={continueWatching.map((media, index) => (
          <img
            key={media.id}
            className="row__poster__continue rounded-lg h-80"
            src={`http://image.tmdb.org/t/p/w500/${media.poster_path}`}
            alt={media.title}
            onClick={() => {
              window.location.href = `/content/${
                media.id
              }?mediaObject=${JSON.stringify(media)}`;
            }}
          />
        ))}
      />
    </div>
  );
};

export default ContinueWatchingCard;
