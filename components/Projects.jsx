import React, {useEffect} from "react";
import Aos from 'aos'
import 'aos/dist/aos.css'
import CryptoP from "../images/mobile1.png";
import Crypto from "../images/cryptoLap.png";
import Henr from '../images/henrop.png'


export const Projects = () => {

    useEffect(()=>{
        Aos.init({duration: 1500})
    },[])
  return (
    <div className="div-container-projects">
      <p className="title-portfolio" data-aos='fade-right'>Portfolio</p>
      <div className="container-project" data-aos='fade-left'>
        <div>
          <img className="laptop-image-project" src={Crypto} alt="laptop" />
          <img className="smartphone-image-project" src={CryptoP} alt="phone" />
        </div>
        <div>
          <p className="p-title-project">Crypto Hunter</p>
          <p>
            Get information of the trending coins, search and follow prices and
            market changes
          </p>
          <div className="container-buttons-home">
            <button className="button-projects">Visit site</button>
            <button className="button-home-hire">Repository</button>
          </div>
        </div>
      </div>
      <div className="container-project" data-aos='fade-right'>
        <div>
          <img className="laptop-image-project" src={Henr} alt="laptop" />
        </div>
        <div>
          <p className="p-title-project">Henropoly</p>
          <p>
            Henropoly is a video game online where you can play and learn about tecnologies with your friend in real time
          </p>
          <div className="container-buttons-home">
            <button className="button-projects">Visit site</button>
            <button className="button-home-hire">Repository</button>
          </div>
        </div>
      </div>
      <div className="container-project" data-aos='fade-left '>
        <div>
          <img className="laptop-image-project" src={Crypto} alt="laptop" />
          <img className="smartphone-image-project" src={CryptoP} alt="phone" />
        </div>
        <div>
          <p className="p-title-project">Crypto Hunter</p>
          <p>
            Get information of the trending coins, search and follow prices and
            market changes
          </p>
          <div className="container-buttons-home">
            <button className="button-projects">Visit site</button>
            <button className="button-home-hire">Repository</button>
          </div>
        </div>
      </div>
    </div>
  );
};
