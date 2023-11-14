import React from "react";
import TopMoviesCard from "../components/homepageComponents/TopMoviesCard";
import TrendingMoviesCard from "../components/homepageComponents/TrendingMoviesCard";
import TrendingShowsCard from "../components/homepageComponents/TrendingShowsCard";
import ContinuteWatchingCard from "../components/homepageComponents/ContinuteWatchingCard";
import AnimeShowsCard from "../components/homepageComponents/AnimeShowsCard";

const HomePage = () => {
  return (
    <div className="">
      <TopMoviesCard />
      <div className="w-[90%] mx-auto">
        <TrendingMoviesCard />
      </div>
      <div className="w-[90%] mx-auto mt-7">
        <TrendingShowsCard />
      </div>
      <div className="w-[90%] mx-auto mt-7">
        <ContinuteWatchingCard />
      </div>
      <div className="w-[90%] mx-auto mt-7">
        <AnimeShowsCard />
      </div>
      <div className="h-96"></div>
    </div>
  );
};

export default HomePage;
