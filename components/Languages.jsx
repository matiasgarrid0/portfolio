import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import Atom from '../imagesLang/atom.png';
import Git from '../imagesLang/github.png'
import Js  from '../imagesLang/js.png'
import Node from '../imagesLang/node-js.png'
import Google from '../imagesLang/google.png'
import Postgre from '../imagesLang/postgre.png'

export const Languages = () => {
  const handleDragStart = (e) => e.preventDefault();
  const items = [
    <div className="link-carousel-banner" onDragStart={handleDragStart}>
      <img src={Atom} width="100 px" alt="atom" />
      <p className="p-card-title-carousel">React</p>
    </div>,
    <div className="link-carousel-banner" onDragStart={handleDragStart}>
      <img src={Js} width="100 px" alt="icon" />
      <p className="p-card-title-carousel">JavaScript</p>
    </div>,
    <div className="link-carousel-banner" onDragStart={handleDragStart}>
      <img src={Node} width="100 px" alt="icon" />
      <p className="p-card-title-carousel">NodeJs</p>
    </div>,
    <div className="link-carousel-banner" onDragStart={handleDragStart}>
      <img src={Google} width="100 px" alt="icon" />
      <p className="p-card-title-carousel">Firebase</p>
    </div>,
    <div className="link-carousel-banner" onDragStart={handleDragStart}>
      <img src={Git} width="100 px" alt="icon" />
      <p className="p-card-title-carousel">Git</p>
    </div>,
    <div className="link-carousel-banner" onDragStart={handleDragStart}>
    <img src={Postgre} width="100 px" alt="icon" />
    <p className="p-card-title-carousel">PostgreSQL</p>
  </div>,
  ];


  const responsive = {
    0: {
      items: 2,
    },
    512: {
      items: 3,
    },
  };

  return (
    <div>
       {/* <p className="title-languajes">Languajes & Technologies</p> */}
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
