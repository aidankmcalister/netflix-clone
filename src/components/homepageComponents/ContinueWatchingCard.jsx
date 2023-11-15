import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRandomContinueWatching } from "../../api/api";
import { Link } from "react-router-dom";
import {
  InformationCircleIcon,
  BookmarkIcon as BookmarkOutline,
} from "@heroicons/react/24/outline";
import {
  addToFavorites,
  removeFromFavorites,
  selectFavorites,
} from "../../redux/favoritesSlice";

const ContinueCarousel = ({ content }) => {
  return (
    <div className="row -ml-5">
      <div className="row__posters">{content}</div>
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
    <div>
      <h1 className="text-xl font-bold mb-2">Continue Watching</h1>
      <ContinueCarousel
        content={continueWatching.map((media, index) => (
          <div key={index} className="row__poster relative mr-3 w-[10rem]">
            <Link
              to={{
                pathname: `/content/${media.id}`,
                search: `?mediaObject=${JSON.stringify(media)}`,
              }}
            >
              <img
                src={`http://image.tmdb.org/t/p/w500/${media.poster_path}`}
                alt={media.title}
                className="rounded-lg"
              />
            </Link>
            <div className="w-full rounded-b-lg absolute bottom-0">
              <div className="w-full bg-gray-600 h-1">
                <div
                  style={{ width: `${media.progressBarWidth}%` }}
                  className={`bg-main-red h-full`}
                ></div>
              </div>
              <div className="bg-gray-900 px-1 py-1 flex items-center justify-between rounded-b-lg">
                <Link
                  to={{
                    pathname: `/content/${media.id}`,
                    search: `?mediaObject=${JSON.stringify(media)}`,
                  }}
                >
                  <InformationCircleIcon className="w-7" />
                </Link>
                <BookmarkOutline
                  className="w-[1.75rem]"
                  onClick={() => handleBookmarkClick(media)}
                />
              </div>
            </div>
          </div>
        ))}
      />
    </div>
  );
};

export default ContinueWatchingCard;
