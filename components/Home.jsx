import React from "react";
import { Header } from "./Header";
import { MdKeyboardArrowRight } from "react-icons/md";
export const Home = () => {
  return (
    <div className="first-div-home">
      <div className="container-home">
        <Header />
        <div className="div-align-items-home">
          <div className="div-elements-home">
            <p className="p-title-home">HELLO!</p>
            <p className="p-text-home">
              I am a Jr Full stack developer from Mendoza, Argentina with
              experience in Front-End. Here you can see my projects, expirience,
              skills and contactme
            </p>
            <div className="container-buttons-home">
              <button className="button-home-projects">
                Projects <MdKeyboardArrowRight />
              </button>
              <button className="button-home-hire">
                I'm looking to hire <MdKeyboardArrowRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
