import React from "react";
import { PlayCircleIcon } from "@heroicons/react/24/outline";

const SearchResults = ({ results }) => {
  return (
    <div className="mt-2">
      <h1 className="font-semibold text-lg">Recommended TV Shows & Movies</h1>
      <div>
        {results.map((result, index) => {
          return !result.backdrop_path ? (
            <div key={index} key={index}></div>
          ) : (
            <div key={index} className="flex w-full mb-4">
              <img
                src={`http://image.tmdb.org/t/p/w500/${result.backdrop_path}`}
                className="w-1/2"
                alt={result.name || result.title}
              />
              <div className="flex justify-between items-center w-full">
                <h3 className="font-bold ml-4">
                  {result.name || result.title}
                </h3>
                <PlayCircleIcon className="w-8" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SearchResults;
