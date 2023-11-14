import MyCarousel from "../MyCarousel";
import {
  InformationCircleIcon,
  BookmarkIcon as BookmarkOutline,
} from "@heroicons/react/24/outline";
import { BookmarkIcon as BookmarkSolid } from "@heroicons/react/24/solid";
import { fetchRandomContinueWatching } from "../../api/api";
import { useState, useEffect } from "react";

const ContinuteWatchingCard = () => {
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

  return (
    <div>
      <h1 className="text-xl font-bold mb-2">Continue Watching</h1>
      <MyCarousel
        content={continueWatching.map((media, index) => {
          const progressBarWidth = generateRandomWidth();
          return (
            <div key={index} className="relative mr-3">
              <img
                src={`http://image.tmdb.org/t/p/w500/${media.poster_path}`}
                alt={media.title}
                className="w-96 rounded-lg"
              />
              <div className="w-full rounded-b-lg absolute  bottom-0  ">
                <div className="w-full bg-gray-600 h-1">
                  <div
                    style={{ width: `${progressBarWidth}%` }}
                    className={`bg-main-red h-full`}
                  ></div>
                </div>
                <div className="bg-gray-900 px-1 py-1 flex items-center justify-between rounded-b-lg">
                  <InformationCircleIcon className="w-6" />
                  <BookmarkOutline className="w-[1.45rem]" />
                </div>
              </div>
            </div>
          );
        })}
      />
      <div className="h-96"></div>
    </div>
  );
};

export default ContinuteWatchingCard;
