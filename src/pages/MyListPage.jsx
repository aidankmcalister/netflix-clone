import React from "react";
import FavoritesCard from "../components/myListComponents/FavoritesCard";
import netflixLogo from "../assets/imgs/netflixLogo.png";

const MyListPage = () => {
  return (
    <div>
      <img
        src={netflixLogo}
        alt="netflixLogo"
        className="absolute z-10 w-12 right-2 top-0 mt-4"
      />
      <div className="w-[90%] mx-auto">
        <FavoritesCard />
      </div>
    </div>
  );
};

export default MyListPage;
