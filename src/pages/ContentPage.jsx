import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchActorsFromMediaId } from "../api/api";
import MyCarousel from "../components/MyCarousel";
import ActorCard from "../components/contentpageComponents/ActorCard";
import { Button } from "@material-tailwind/react";
import { PlusIcon, PlayIcon } from "@heroicons/react/24/solid";
import {
  addToFavorites,
  removeFromFavorites,
  selectFavorites,
} from "../redux/favoritesSlice";
import { useDispatch, useSelector } from "react-redux";

const ContentPage = () => {
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);
  const { id } = useParams();
  const searchParams = new URLSearchParams(window.location.search);
  const media = JSON.parse(searchParams.get("mediaObject"));

  const [actorIds, setActorIds] = useState([]);

  useEffect(() => {
    const getActorIds = async () => {
      try {
        let mediaType = "movie";
        if (media && media.release_date === undefined) {
          mediaType = "tv";
        }

        const actorsData = await fetchActorsFromMediaId({
          id: id,
          mediaType: mediaType,
        });

        const limitedActorIds = actorsData
          .slice(0, 10)
          .map((actor) => actor.id);
        setActorIds(limitedActorIds);
      } catch (error) {
        console.error("Error fetching actor IDs:", error);
      }
    };

    getActorIds();
  }, [id, media]);

  if (!media) {
    return (
      <div className="p-5 bg-gray-800 text-lg font-bold rounded-xl m-5">
        No media object found or invalid data.
      </div>
    );
  }

  const handleAddToList = (media) => {
    const isFavorite = favorites.some((favorite) => favorite.id === media.id);
    if (isFavorite) {
      dispatch(removeFromFavorites(media.id));
    } else {
      dispatch(addToFavorites(media));
    }
  };

  return (
    <div className="flex-col flex overflow-x-hidden">
      <img
        src={`http://image.tmdb.org/t/p/original/${media.backdrop_path}`}
        alt={media.name || media.title}
        className="flex-none shadow-xl"
      />
      <div className="m-3 -mt-5 bg-gray-900 p-4 rounded-lg shadow-lg">
        <div className="flex justify-between items-center mb-2">
          <h1 className="text-3xl font-bold">{media.name || media.title}</h1>
          <p className="font-bold w-[25%] ml-2 text-center">
            {media.vote_average.toFixed(1)} / 10
          </p>
        </div>
        {media.release_date && (
          <p className="text-sm text-gray-700 mb-2">
            {media.release_date.slice(0, 4)}
          </p>
        )}
        <p className="text-sm text-gray-400">{media.overview}</p>
        <div className="flex mt-3">
          <Button className="flex items-center justify-center px-3 bg-white text-black mr-5 h-12 min-w-[6rem]">
            <PlayIcon className="w-5 mr-1" />
            Play
          </Button>
          <Button
            className="flex items-center h-12 px-3 justify-center bg-gray-800 min-w-[6rem]"
            onClick={() => handleAddToList(media)}
          >
            <PlusIcon className="w-6 mr-1" />
            My List
          </Button>
        </div>
      </div>
      <div className="flex-grow mx-3">
        <h1 className="font-bold text-xl">Top Actors</h1>
        <MyCarousel
          content={
            actorIds.length > 0 ? (
              actorIds.map((actorId) => (
                <ActorCard key={actorId} id={actorId} />
              ))
            ) : (
              <p>Loading actor details...</p>
            )
          }
        />
        {/* <MyCarousel
          content={
            actorIds.length > 0 ? (
              actorIds.map((actorId) => (
                <ActorCard key={actorId} id={actorId} />
              ))
            ) : (
              <p>Loading actor details...</p>
            )
          }
        /> */}
      </div>
    </div>
  );
};

export default ContentPage;
