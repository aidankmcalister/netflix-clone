import React, { useState, useEffect } from "react";
import MobileSearch from "../components/mobile/MobileSearch";
import SearchRecommend from "../components/mobile/SearchRecommend";
import SearchResults from "../components/mobile/SearchResults";
import { searchMoviesAndShows } from "../api/api";

const MobileSearchPage = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        if (searchQuery.trim() !== "") {
          const results = await searchMoviesAndShows(searchQuery);
          setSearchResults(results);
        } else {
          setSearchResults([]);
        }
      } catch (error) {
        console.error("Error searching:", error);
      }
    };

    fetchSearchResults();
  }, [searchQuery]);

  return (
    <div>
      <MobileSearch setSearchQuery={setSearchQuery} />
      <div className="mx-3">
        {searchQuery.trim() !== "" ? (
          <SearchResults results={searchResults} />
        ) : (
          <SearchRecommend />
        )}
      </div>
    </div>
  );
};

export default MobileSearchPage;
