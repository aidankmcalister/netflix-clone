// import { BookmarkIcon as BookmarkSolid } from "@heroicons/react/24/solid";
import { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
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
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
      slidesToSlide: 2,
    },
  };

  return (
    <Carousel swipeable={true} draggable={true} responsive={responsive}>
      {content}
    </Carousel>
  );
};

const ContinueWatchingCard = () => {
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);
  const [continueWatching, setContinueWatching] = useState([]);

  useEffect(() => {
    const getContinued = async () => {
      const continueWatchingData = await fetchRandomContinueWatching();
      setContinueWatching(continueWatchingData);
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
        content={continueWatching.map((media, index) => {
          const progressBarWidth = generateRandomWidth();
          return (
            <div key={index} className="relative mr-3 w-[10rem]">
              <Link to={`/content/${media.id}`}>
                <img
                  src={`http://image.tmdb.org/t/p/w500/${media.poster_path}`}
                  alt={media.title}
                  className="rounded-lg"
                />
                <div className="w-full rounded-b-lg absolute  bottom-0  ">
                  <div className="w-full bg-gray-600 h-1">
                    <div
                      style={{ width: `${progressBarWidth}%` }}
                      className={`bg-main-red h-full`}
                    ></div>
                  </div>
                  <div className="bg-gray-900 px-1 py-1 flex items-center justify-between rounded-b-lg">
                    <InformationCircleIcon className="w-7" />
                    <BookmarkOutline
                      className="w-[1.75rem]"
                      onClick={() => handleBookmarkClick(media)}
                    />
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      />
    </div>
  );
};

export default ContinueWatchingCard;
