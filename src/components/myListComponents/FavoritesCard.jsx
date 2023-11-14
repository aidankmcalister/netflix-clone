import React from "react";
import { useSelector } from "react-redux";
import { selectFavorites } from "../../redux/favoritesSlice";
import { Link } from "react-router-dom";

const FavoritesCard = () => {
  const favorites = useSelector(selectFavorites);
  console.log("Favorites:", favorites);

  return (
    <div>
      <h1 className="text-4xl font-bold mt-7">My List</h1>
      <div className="grid grid-cols-2 gap-4 mt-4">
        {favorites.map((favorite) => (
          <div className="">
            <Link
              to={{
                pathname: `/content/${favorite.id}`,
                search: `?mediaObject=${JSON.stringify(favorite)}`,
              }}
            >
              <img
                src={`http://image.tmdb.org/t/p/w500/${favorite.poster_path}`}
                alt={favorite.title}
                className="h-64 object-cover rounded-lg"
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavoritesCard;
