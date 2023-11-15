const ActorCarousel = ({ actor }) => {
  return (
    <div className="flex flex-col h-full w-[6.5rem]">
      <img
        src={`http://image.tmdb.org/t/p/original/${actor.profile_path}`}
        alt={actor.name}
        className="rounded-lg"
      />
      <h3 className="text-center font-bold text-sm flex flex-col flex-grow justify-center">
        {actor.name}
      </h3>
    </div>
  );
};

export default ActorCarousel;
