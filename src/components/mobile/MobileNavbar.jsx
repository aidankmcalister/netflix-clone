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

const MobileNavbar = ({ currentPage }) => {
  const iconClasses = "w-7 mx-6";
  const listItemClasses = "flex flex-col items-center ";

  const isCurrentPage = (page) => currentPage === page;

  const linkClasses = (page) =>
    `flex flex-col items-center text-center ${
      isCurrentPage(page) ? "" : "font-normal"
    }`;

  return (
    <div>
      <ul className="flex justify-center text-xs bg-[#1E1E1E] py-2">
        <li className={listItemClasses}>
          <Link to="/home" className={linkClasses("home")}>
            {isCurrentPage("home") ? (
              <HomeIconSolid className={iconClasses} />
            ) : (
              <HomeIconOutline className={iconClasses} />
            )}
            <p
              className={`${
                isCurrentPage("home")
                  ? "font-bold transition-all scale-110"
                  : "scale-90 transition-all text-gray-500"
              }`}
            >
              Home
            </p>
          </Link>
        </li>
        <li className={listItemClasses}>
          <Link to="/mylist" className={linkClasses("mylist")}>
            {isCurrentPage("mylist") ? (
              <StarIconSolid className={iconClasses} />
            ) : (
              <StarIconOutline className={iconClasses} />
            )}
            <p
              className={`${
                isCurrentPage("mylist")
                  ? "font-bold transition-all scale-110"
                  : "scale-90 transition-all text-gray-500"
              }`}
            >
              My List
            </p>
          </Link>
        </li>
        <li className={listItemClasses}>
          <Link to="/mobilesearch" className={linkClasses("search")}>
            <MagnifyingGlassIconOutline className={iconClasses} />
            <p
              className={`${
                isCurrentPage("mobilesearch")
                  ? "font-bold transition-all scale-110"
                  : "scale-90 transition-all text-gray-500"
              }`}
            >
              Search
            </p>
          </Link>
        </li>
        <li className={listItemClasses}>
          <Link to="/settings" className={linkClasses("settings")}>
            <BarsIconOutline className={iconClasses} />
            <p
              className={`${
                isCurrentPage("settings")
                  ? "font-bold transition-all scale-110"
                  : "scale-90 transition-all text-gray-500"
              }`}
            >
              Settings
            </p>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default MobileNavbar;
