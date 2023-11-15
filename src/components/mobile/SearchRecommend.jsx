import { useState, useEffect } from "react";
import { fetchPopularMovies } from "../../api/api";
import { Link } from "react-router-dom";

const SearchRecommend = () => {
  const [topMovies, setTopMovies] = useState([]);

  // const [recommendedMedia, setRecommendedMedia] = useState([]);

  useEffect(() => {
    const fetchTopMovies = async () => {
      const topMoviesData = await fetchPopularMovies();
      setTopMovies(topMoviesData);
    };
    fetchTopMovies();
  }, []);
  // useEffect(() => {
  //   const getRecommendedMedia = async () => {
  //     try {
  //       const recommendedMediaData = await fetchRecommendedMoviesAndShows();
  //       setRecommendedMedia(recommendedMediaData);
  //     } catch (error) {
  //       console.error("Error fetching recommended media:", error);
  //     }
  //   };
  //   getRecommendedMedia();
  // }, []);

  return (
    <div className="mt-2">
      <h1 className="font-semibold text-xl mb-2">Recommended Movies</h1>
      <div>
        {topMovies.map((media, index) => (
          <Link
            key={index}
            to={{
              pathname: `/content/${media.id}`,
              search: `?mediaObject=${JSON.stringify(media)}`,
            }}
          >
            <div className="flex w-full mb-4">
              <img
                src={`http://image.tmdb.org/t/p/w500/${media.backdrop_path}`}
                className="w-1/2"
              />
              <div className="flex justify-between items-center w-full">
                <h3 className="font-bold ml-4">{media.name || media.title}</h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SearchRecommend;
