import { useEffect, useState } from "react";
import { fetchPopularMovies } from "../../api/api";
import { Button, Carousel } from "@material-tailwind/react";
import netflixLogo from "../../assets/imgs/netflixLogo.png";
import { PlusIcon, PlayIcon } from "@heroicons/react/24/solid";

const TopMoviesCard = () => {
  const [topMovies, setTopMovies] = useState([]);

  useEffect(() => {
    const fetchTopMovies = async () => {
      const topMoviesData = await fetchPopularMovies();
      setTopMovies(topMoviesData);
    };
    fetchTopMovies();
  }, []);

  function handleSubmit(movie) {
    console.log(`Movie Id: ${movie.id}`);
  }
  function addToMyList(movie) {
    console.log(`Added ${movie.title} to list`);
    console.log(`Movie Id: ${movie.id}`);
  }
  return (
    <div>
      <img
        src={netflixLogo}
        alt="netflixLogo"
        className="absolute z-10 w-12 mt-2"
      />
      <Carousel
        loop={true}
        autoplay={true}
        autoplayDelay={10000}
        transition={{ duration: 0.25 }}
        navigation={({ setActiveIndex, activeIndex, length }) => (
          <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
            {new Array(length).fill("").map((_, i) => (
              <span
                key={i}
                className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                  activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                }`}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>
        )}
      >
        {topMovies.map((movie) => (
          <div key={movie.id} className="relative w-full h-full">
            <div className="absolute inset-0 bg-gradient-to-t from-[#181818] via-transparent to-transparent" />
            <img
              src={`http://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={movie.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex">
              <Button
                onClick={() => handleSubmit(movie)}
                className="flex items-center px-3 bg-white text-black mr-5 h-12"
              >
                <PlayIcon className="w-4 mr-2" />
                Play
              </Button>
              <Button
                onClick={() => addToMyList(movie)}
                className="flex items-center h-12 px-3 bg-gray-800"
              >
                <PlusIcon className="w-4 mr-2" />
                My List
              </Button>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default TopMoviesCard;
