import React, { useEffect, useState } from "react";
import { fetchActorDetails } from "../../api/api";

const ActorCard = ({ id }) => {
  const [actorDetails, setActorDetails] = useState(null);

  useEffect(() => {
    const getActorDetails = async () => {
      try {
        const details = await fetchActorDetails(id);
        setActorDetails(details);
      } catch (error) {
        console.error("Error fetching actor details:", error);
      }
    };

    getActorDetails();
  }, [id]);

  return (
    <div className="shadow-lg mr-3 my-3 flex flex-col bg-gray-900 p-1 rounded-xl h-56">
      {actorDetails ? (
        <div className="flex flex-col h-full">
          <img
            src={`http://image.tmdb.org/t/p/original/${actorDetails.profile_path}`}
            alt={actorDetails.name}
            className="rounded-lg"
          />
          <h3 className="text-center font-bold text-sm flex flex-col flex-grow justify-center">
            {actorDetails.name}
          </h3>
        </div>
      ) : (
        <p>Loading actor details...</p>
      )}
    </div>
  );
};

export default ActorCard;
