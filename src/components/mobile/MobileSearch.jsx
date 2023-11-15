import React, { useState, useEffect } from "react";
import { MagnifyingGlassIcon, MicrophoneIcon } from "@heroicons/react/24/solid";
import { searchMoviesAndShows } from "../../api/api";

const MobileSearch = ({ setSearchQuery }) => {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async (query) => {
    try {
      const results = await searchMoviesAndShows(query);
      setSearchResults(results);
    } catch (error) {
      console.error("Error searching:", error);
    }
  };

  useEffect(() => {
    handleSearch(""); // Initial call with an empty query
  }, []);

  return (
    <div className="flex justify-between py-1 px-5 bg-[rgb(50,50,50)]">
      <MagnifyingGlassIcon className="w-7" />
      <input
        type="text"
        placeholder="Search"
        className="bg-[rgb(50,50,50)] flex-1 mx-3 py-3 px-3"
        onChange={(e) => {
          setSearchQuery(e.target.value);
          handleSearch(e.target.value);
        }}
      />
      <MicrophoneIcon className="w-7" />
    </div>
  );
};

export default MobileSearch;
