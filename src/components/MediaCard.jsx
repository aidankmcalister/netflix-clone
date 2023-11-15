import React from "react";
import { Link } from "react-router-dom";

const MediaCard = ({ media }) => {
  return (
    <img
      className="row__poster rounded-lg"
      src={`http://image.tmdb.org/t/p/w500/${media.poster_path}`}
      alt={media.title}
      onClick={() => {
        window.location.href = `/content/${
          media.id
        }?mediaObject=${JSON.stringify(media)}`;
      }}
    />
  );
};

export default MediaCard;
