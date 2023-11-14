import React from "react";

const MediaCard = ({ media }) => {
  return (
    <div className="mr-3">
      <img
        src={`http://image.tmdb.org/t/p/w500/${media.poster_path}`}
        alt={media.title}
        className="h-40 object-cover rounded-lg"
      />
    </div>
  );
};

export default MediaCard;
