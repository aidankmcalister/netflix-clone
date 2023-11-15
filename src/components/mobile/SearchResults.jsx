import React from "react";
import { Link } from "react-router-dom";

const SearchResults = ({ results }) => {
  return (
    <div className="mt-2">
      <h1 className="font-semibold text-lg">Recommended TV Shows & Movies</h1>
      <div>
        {results.map((result, index) => {
          return !result.backdrop_path ? (
            <div key={index}></div>
          ) : (
            <Link
              key={index}
              to={{
                pathname: `/content/${result.id}`,
                search: `?mediaObject=${JSON.stringify(result)}`,
              }}
            >
              <div className="flex w-full mb-4">
                <img
                  src={`http://image.tmdb.org/t/p/w500/${result.backdrop_path}`}
                  className="w-1/2"
                  alt={result.name || result.title}
                />
                <div className="flex justify-between items-center w-full">
                  <h3 className="font-bold ml-4">
                    {result.name || result.title}
                  </h3>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default SearchResults;
