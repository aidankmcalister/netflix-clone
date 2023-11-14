import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { fetchNetflixOriginals } from "../../api/api";
import { useState, useEffect } from "react";

const OriginalsCarousel = ({ content }) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
      slidesToSlide: 2,
    },
  };

  return (
    <Carousel swipeable={true} draggable={true} responsive={responsive}>
      {content}
    </Carousel>
  );
};

const NetflixOriginalsCard = () => {
  const [netflixOriginals, setNetflixOriginals] = useState([]);

  useEffect(() => {
    const getNetflixOriginals = async () => {
      const netflixOriginalsData = await fetchNetflixOriginals();
      setNetflixOriginals(netflixOriginalsData);
    };
    getNetflixOriginals();
  }, []);

  return (
    <div>
      <h1 className="text-xl font-bold mb-2">
        Only on{" "}
        <span className="bg-gradient-to-tr from-main-red via-red-400 to-red-500 bg-clip-text text-transparent">
          NETFLIX
        </span>
      </h1>
      <OriginalsCarousel
        content={netflixOriginals.map((media, index) => {
          return (
            <div key={index} className="relative mr-3 w-[10rem]">
              <img
                src={`http://image.tmdb.org/t/p/w500/${media.poster_path}`}
                alt={media.title}
                className="rounded-lg"
              />
            </div>
          );
        })}
      />
    </div>
  );
};

export default NetflixOriginalsCard;
