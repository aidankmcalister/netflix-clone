import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchActorsFromMediaId } from "../api/api";
import MyCarousel from "../components/MyCarousel";
import ActorCard from "../components/homepageComponents/contentpageComponents/ActorCard";

const ContentPage = () => {
  const { id } = useParams();
  const searchParams = new URLSearchParams(window.location.search);
  const media = JSON.parse(searchParams.get("mediaObject"));

  const [actorIds, setActorIds] = useState([]);

  useEffect(() => {
    const getActorIds = async () => {
      try {
        const actorsData = await fetchActorsFromMediaId({
          id: id,
          mediaType: "movie",
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
  }, [id]);

  if (!media) {
    return (
      <div className="p-5 bg-gray-800 text-lg font-bold rounded-xl">
        No media object found or invalid data.
      </div>
    );
  }

  return (
    <div className="flex-col flex overflow-x-hidden">
      <img
        src={`http://image.tmdb.org/t/p/original/${media.backdrop_path}`}
        alt={media.name || media.title}
        className="flex-none shadow-lg"
      />
      <div className="m-3 bg-gray-900 p-4 rounded-lg shadow-lg">
        <div className="flex justify-between items-center mb-2">
          <h1 className="text-3xl font-bold">{media.name || media.title}</h1>
          <p className="font-bold w-[15%] text-center">
            {Math.round(media.vote_average)} / 10
          </p>
        </div>
        <p className="text-sm text-gray-700 mb-2">
          {media.release_date.slice(0, 4)}
        </p>

        <p className="text-sm">{media.overview}</p>
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
      </div>
    </div>
  );
};

export default ContentPage;
