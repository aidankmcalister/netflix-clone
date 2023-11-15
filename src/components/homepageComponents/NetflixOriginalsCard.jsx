import { fetchNetflixOriginals } from "../../api/api";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const OriginalsCarousel = ({ content }) => {
  return (
    <div className="row">
      <div className="row__posters">{content}</div>
    </div>
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
            <img
              key={media.id}
              className="row__poster__continue rounded-lg h-80"
              src={`http://image.tmdb.org/t/p/w500/${media.poster_path}`}
              alt={media.title}
              onClick={() => {
                window.location.href = `/content/${
                  media.id
                }?mediaObject=${JSON.stringify(media)}`;
              }}
            />
          );
        })}
      />
    </div>
  );
};

export default NetflixOriginalsCard;
