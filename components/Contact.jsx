import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Linked from "../images/linkedin1.png";
import Git from "../imagesLang/github.png";
import { db } from "../Firebase/firebase";
import { doc, setDoc } from "firebase/firestore";
export const Contact = () => {
  const [form, setForm] = useState({
    email: "",
    subject: "",
    message: "",
  });

  const { email, subject, message } = form;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !subject || !message) {
      toast.error("Please complete each field");
    } else {
      const formRef = doc(db, 'portfolio', email)
    try {
      await setDoc(formRef, {form})
      toast.success("Email sent successfully")
    } catch (error) {
      console.log(error)
    }
    }
  };

  const handleInputChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  return (
    <div className="container-animation-experience">
      <ToastContainer position="top-center" theme="colored" autoClose={2000} />
      <p className="title-portfolio">Contact me</p>
      <div className="contact-container-form">
        <div className="card-container-contact">
          <form onSubmit={(e) => handleSubmit(e)} id="contactForm" action="">
            <div className="container-inputs-contact">
              <div className="container-input-email">
                <label className="label-input-contact">EMAIL</label>
                <input
                  className="input-email-contact"
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => handleInputChange(e)}
                />
              </div>
              <div>
                <label className="label-input-contact">SUBJECT</label>
                <input
                  className="input-email-contact"
                  type="text"
                  name="subject"
                  value={subject}
                  onChange={(e) => handleInputChange(e)}
                />
              </div>
              <div>
                <label className="label-input-contact">MESSAGE</label>
                <textarea
                  className="input-message-contact"
                  height="30px"
                  name="message"
                  value={message}
                  onChange={(e) => handleInputChange(e)}
                />
              </div>
              <button className="button-contact">Send</button>
            </div>
          </form>
        </div>
        <p style={{ fontWeight: "700" }}>OR</p>
        <div className="div-follow-contact">
          <p className="follow-p-title">Follow me</p>
          <a href={"https://www.linkedin.com/in/matias-garridodev/"}>
            <img src={Linked} width="100px" alt="linkedin" />
          </a>
          <p style={{ fontSize: "20px", marginTop: "1px", fontWeight: "700" }}>
            LinkedIn
          </p>
          <a href={"https://github.com/matiasgarrid0"}>
            <img src={Git} width="100px" alt="linkedin" />
          </a>
          <p style={{ fontSize: "20px", marginTop: "1px", fontWeight: "700" }}>
            GitHub
          </p>
        </div>
      </div>
    </div>
  );
};
