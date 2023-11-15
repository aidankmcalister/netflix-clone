import React, { useEffect, useState } from "react";
import { fetchActorDetails } from "../../api/api";
import ActorCarousel from "../ActorCarousel";

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
    <div className="shadow-lg mr-3 flex flex-col bg-gray-900 p-1 rounded-xl h-56">
      {actorDetails ? (
        <ActorCarousel actor={actorDetails} />
      ) : (
        <p>Loading actor details...</p>
      )}
    </div>
  );
};

export default ActorCard;
