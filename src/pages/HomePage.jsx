import React from "react";
import TopMoviesCard from "../components/homepageComponents/TopMoviesCard";
import TrendingMoviesCard from "../components/homepageComponents/TrendingMoviesCard";
import TrendingShowsCard from "../components/homepageComponents/TrendingShowsCard";
import ContinueWatchingCard from "../components/homepageComponents/ContinueWatchingCard";
import AnimeShowsCard from "../components/homepageComponents/AnimeShowsCard";
import AnimatedShowsCard from "../components/homepageComponents/AnimatedShowsCard";
import AnimatedMoviesCard from "../components/homepageComponents/AnimatedMoviesCard";
import AnimeMoviesCard from "../components/homepageComponents/AnimeMoviesCard";
import HorrorMoviesCard from "../components/homepageComponents/HorrorMoviesCard";
import ThrillerMoviesCard from "../components/homepageComponents/ThrillerMoviesCard";
import NetflixOriginalsCard from "../components/homepageComponents/NetflixOriginalsCard";

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
        <ContinueWatchingCard />
      </div>
      <div className="w-[90%] mx-auto mt-7">
        <AnimatedShowsCard />
      </div>
      <div className="w-[90%] mx-auto mt-7">
        <AnimatedMoviesCard />
      </div>
      <div className="w-[90%] mx-auto mt-7">
        <ThrillerMoviesCard />
      </div>
      <div className="w-[90%] mx-auto mt-7">
        <HorrorMoviesCard />
      </div>
      <div className="w-[90%] mx-auto mt-7">
        <NetflixOriginalsCard />
      </div>
      <div className="w-[90%] mx-auto mt-7">
        <AnimeShowsCard />
      </div>
      <div className="w-[90%] mx-auto mt-7">
        <AnimeMoviesCard />
      </div>
      <div className="h-20"></div>
    </div>
  );
};

export default HomePage;
