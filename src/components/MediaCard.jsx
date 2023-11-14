import React from "react";
import { Link } from "react-router-dom";

const MediaCard = ({ media }) => {
  return (
    <div className="mr-3">
      <Link
        to={{
          pathname: `/content/${media.id}`,
          search: `?mediaObject=${JSON.stringify(media)}`,
        }}
      >
        <img
          src={`http://image.tmdb.org/t/p/w500/${media.poster_path}`}
          alt={media.title}
          className="h-40 object-cover rounded-lg"
        />
      </Link>
    </div>
  );
};

export default MediaCard;
