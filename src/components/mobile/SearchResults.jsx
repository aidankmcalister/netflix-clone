import React from "react";

const SearchResults = ({ results }) => {
  return (
    <div>
      {results.map((result) => (
        <div key={result.id}>{result.title || result.name}</div>
      ))}
    </div>
  );
};

export default SearchResults;
