import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import Atom from "../images/atom.png";
import Coding from "../images/coding.png";
import Coding1 from "../images/coding1.png";
import Mobil from "../images/booking.png";
import Follow from "../images/follow.png";

export const Carousel = () => {
  const handleDragStart = (e) => e.preventDefault();
  const items = [
    <div className="link-carousel-banner" onDragStart={handleDragStart}>
      <img src={Atom} width="100 px" alt="atom" />
      <p className="p-card-title-carousel">FRONT END</p>
      <p className="p-card-text-carousel">Experience in React and technologies of front</p>
    </div>,
    <div className="link-carousel-banner" onDragStart={handleDragStart}>
      <img src={Coding} width="100 px" alt="icon" />
      <p className="p-card-title-carousel">BACKEND</p>
      <p className="p-card-text-carousel">Node, Express, Mongo, PostgreSQL</p>
    </div>,
    <div className="link-carousel-banner" onDragStart={handleDragStart}>
      <img src={Coding1} width="100 px" alt="icon" />
      <p className="p-card-title-carousel">SMART DESIGN</p>
      <p className="p-card-text-carousel">Clean, modern and optimized designs for a great performance</p>
    </div>,
    <div className="link-carousel-banner" onDragStart={handleDragStart}>
      <img src={Mobil} width="100 px" alt="icon" />
      <p className="p-card-title-carousel">MOBILE FRIENDLY</p>
      <p className="p-card-text-carousel">A responsive design makes your website accessible to all users</p>
    </div>,
    <div className="link-carousel-banner" onDragStart={handleDragStart}>
      <img src={Follow} width="100 px" alt="icon" />
      <p className="p-card-title-carousel">FOLLOW ME</p>
      <p className="p-card-text-carousel">Follow me on my social networks</p>
    </div>,
  ];
  const responsive = {
    512: {
      items: 4,
    },
    0: {
      items: 1,
    },
  };

  return (
    <div  className='container-carousel'>
      <div className="div-container-carousel">
        <AliceCarousel
          items={items}
          mouseTracking
          infinite
          autoPlayInterval={1000}
          animationDuration={1500}
          responsive={responsive}
          autoPlay
          disableButtonsControls
          disableDotsControls
        />
      </div>
    </div>
  );
};
