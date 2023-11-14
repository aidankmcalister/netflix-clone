import React, { useRef } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const MyCarousel = ({ content }) => {
  const carouselRef = useRef(null);

  const handleDragStart = (e) => {
    // Prevent vertical scrolling during dragging
    e.preventDefault();
    // Optionally, you can also prevent the default drag and drop behavior
    e.dataTransfer.dropEffect = "move";
  };

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
      items: 3,
      slidesToSlide: 3,
    },
  };

  return (
    <Carousel
      ref={carouselRef}
      swipeable={true}
      draggable={true}
      responsive={responsive}
      onDragStart={handleDragStart}
    >
      {content}
    </Carousel>
  );
};

export default MyCarousel;
