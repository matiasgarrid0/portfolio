import React from "react";
import Linked from "../images/linkedin1.png";
import Git from "../imagesLang/github.png";
export const Contact = () => {
  return (
    <div className="container-animation-experience">
      <p className="title-portfolio">Contact me</p>
      <div className="contact-container-form">
        <div className="card-container-contact">
          <div className="container-inputs-contact">
            <div className="container-input-email">
              <label className="label-input-contact">EMAIL</label>
              <input className="input-email-contact" type="email" />
            </div>
            <div>
              <label className="label-input-contact">SUBJECT</label>
              <input className="input-email-contact" type="text" />
            </div>
            <div>
              <label className="label-input-contact">MESSAGE</label>
              <textarea
                className="input-message-contact"
                height="30px"
              />
            </div>
            <button className="button-contact">Send</button>
          </div>
        </div>
        <p style={{fontWeight: '700'}}>OR</p>
        <div className="div-follow-contact">
          <p className="follow-p-title">Follow me</p>
            <a href={'https://www.linkedin.com/in/matias-garridodev/'}>
            <img  src={Linked} width="100px" alt="linkedin" />
            </a>
            <p style={{fontSize:'20px', marginTop: '1px', fontWeight:'700'}}>LinkedIn</p>
            <a href={'https://github.com/matiasgarrid0'}>
            <img  src={Git} width="100px" alt="linkedin" />
            </a>
            <p style={{fontSize:'20px', marginTop: '1px', fontWeight:'700'}}>GitHub</p>
        </div>
      </div>
    </div>
  );
};
