import React from "react";
import { useSelector } from "react-redux";
import { selectFavorites } from "../../redux/favoritesSlice";
import { Link } from "react-router-dom";

const FavoritesCard = () => {
  const favorites = useSelector(selectFavorites);

  return (
    <div className="flex flex-col h-screen w-full">
      <h1 className="text-4xl font-bold mt-7">My List</h1>
      <div className="flex flex-col items-center">
        {favorites.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-10 mt-4">
            {favorites.map((favorite) => (
              <div key={favorite.id}>
                <Link
                  to={{
                    pathname: `/content/${favorite.id}`,
                    search: `?mediaObject=${JSON.stringify(favorite)}`,
                  }}
                >
                  <img
                    src={`http://image.tmdb.org/t/p/w500/${favorite.poster_path}`}
                    alt={favorite.title}
                    className="h-64 lg:h-96 object-cover rounded-lg"
                  />
                </Link>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-gray-900 rounded-lg h-52 mx-2 flex justify-center items-center mt-7">
            <h1 className="font-semibold text-center text-3xl p-5">
              Sorry! You have nothing in your list.
            </h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default FavoritesCard;
