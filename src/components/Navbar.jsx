import { useSelector } from "react-redux";
import { selectUsername } from "../redux/userSlice";
import netflixLogo from "../assets/imgs/netflixLogo.png";
import { Link } from "react-router-dom";
import {
  HomeIcon as HomeIconOutline,
  MagnifyingGlassIcon as MagnifyingGlassIconOutline,
  StarIcon as StarIconOutline,
  Bars3BottomRightIcon as BarsIconOutline,
} from "@heroicons/react/24/outline";
import {
  HomeIcon as HomeIconSolid,
  StarIcon as StarIconSolid,
} from "@heroicons/react/24/solid";

const Navbar = ({ currentPage }) => {
  const isCurrentPage = (page) => currentPage === page;
  const username = useSelector(selectUsername);

  const linkClasses = (page) =>
    `flex flex-col items-center text-center ${
      isCurrentPage(page) ? "text-main-red" : "font-normal"
    }`;

  return (
    <div className="flex justify-between w-full items-center fixed z-50 bg-[#181818]">
      <div className=" flex items-center">
        <Link to="/">
          <img src={netflixLogo} alt="netflixLogo" className="w-10 m-3" />
        </Link>
        <h1 className="ml-1 lg:ml-3 lg:text-3xl text-xl font-semibold">
          Welcome,{" "}
          <span className="font-bold bg-gradient-to-tr from-main-red via-red-400 to-red-500 bg-clip-text text-transparent">
            {username}
          </span>
          !
        </h1>
      </div>
      <ul className="flex mr-3">
        <Link to="/" className={linkClasses("home")}>
          <li className="flex items-center mr-4">
            {isCurrentPage("home") ? (
              <HomeIconSolid className="w-7 mr-2 text-main-red" />
            ) : (
              <HomeIconOutline className="w-7 mr-2" />
            )}
            <p>Home</p>
          </li>
        </Link>
        <Link to="/mylist" className={linkClasses("mylist")}>
          <li className="flex items-center mr-4">
            {isCurrentPage("mylist") ? (
              <StarIconSolid className="w-7 mr-2w-7 mr-2 text-main-red" />
            ) : (
              <StarIconOutline className="w-7 mr-2" />
            )}
            <p>My List</p>
          </li>
        </Link>
        <Link to="/mobilesearch" className={linkClasses("mobilesearch")}>
          <li className="flex items-center mr-4">
            <MagnifyingGlassIconOutline
              className={`w-7 mr-2 ${
                isCurrentPage("/mobilesearch") ? "text-main-red" : ""
              }`}
            />
            <p>Search</p>
          </li>
        </Link>
        <Link to="/settings" className={linkClasses("settings")}>
          <li className="flex items-center">
            <BarsIconOutline
              className={`w-7 mr-2 ${
                isCurrentPage("/settings") ? "text-main-red" : ""
              }`}
            />
            <p>Settings</p>
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
