import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Linked from "../images/linkedin1.png";
import Git from "../imagesLang/github.png";
import { db } from "../Firebase/firebase";
import { doc, setDoc } from "firebase/firestore";
export const Contact = () => {
  const [forms, setForm] = useState({
    user_email: "",
    user_name: "",
    message: "",
    subject: "",
  });

  const { user_email, user_name, message, subject } = forms;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user_email || !user_name || !message) {
      toast.error("Please complete each field");
    } else {
      const formRef = doc(db, "portfolio", user_email);
      emailjs.sendForm(
        "service_b7d2niz",
        "template_wnaxl8n",
        e.target,
        "aAGZij1MXePtV_tKe"
      );
      try {
        await setDoc(formRef, { forms });
        toast.success("Email sent successfully");
        setForm({
          user_email: "",
          user_name: "",
          message: "",
          subject: "",
        });
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleInputChange = (e) => {
    setForm({ ...forms, [e.target.name]: e.target.value });
    if (message.length >= 300) {
      toast.error("Max of 300 caracters");
    }
  };

  return (
    <section>
      <div className="container-animation-contact">
        <ToastContainer
          position="top-center"
          theme="colored"
          autoClose={2000}
        />
        <p className="title-contact">Contact me</p>
        <div className="contact-container-form">
          <div className="card-container-contact">
            <form onSubmit={(e) => handleSubmit(e)} id="contactForm" action="">
              <div className="container-inputs-contact">
                <div className="container-input-email">
                  <label className="label-input-contact">EMAIL</label>
                  <input
                    className="input-email-contact"
                    type="email"
                    name="user_email"
                    value={user_email}
                    maxlength="91"
                    onChange={(e) => handleInputChange(e)}
                  />
                </div>
                <div className="container-input-email">
                  <label className="label-input-contact">SUBJECT</label>
                  <input
                    className="input-email-contact"
                    type="text"
                    name="subject"
                    value={subject}
                    maxlength="91"
                    onChange={(e) => handleInputChange(e)}
                  />
                </div>
                <div>
                  <label className="label-input-contact">NAME</label>
                  <input
                    className="input-email-contact"
                    type="text"
                    name="user_name"
                    value={user_name}
                    onChange={(e) => handleInputChange(e)}
                    maxlength="91"
                  />
                </div>
                <div>
                  <label className="label-input-contact">MESSAGE</label>
                  <textarea
                    className="input-message-contact"
                    name="message"
                    value={message}
                    onChange={(e) => handleInputChange(e)}
                    maxlength="301"
                  />
                </div>
                <input className="button-contact" type="submit" value="Send" />
              </div>
            </form>
          </div>
          <p style={{ fontWeight: "700", color: "#fff" }}>OR</p>
          <div className="div-follow-contact">
            <p className="follow-p-title">Follow me</p>
            <div className="div-container-icons">
              <div className="container-icon-name-contact">
                <a href={"https://www.linkedin.com/in/matias-garridodev/"}>
                  <img src={Linked} width="100px" alt="linkedin" />
                </a>
                <p
                  style={{
                    fontSize: "20px",
                    marginTop: "1px",
                    fontWeight: "700",
                  }}
                >
                  LinkedIn
                </p>
              </div>
              <div className="container-icon-name-contact">
                <a href={"https://github.com/matiasgarrid0"}>
                  <img src={Git} width="100px" alt="linkedin" />
                </a>
                <p
                  style={{
                    fontSize: "20px",
                    marginTop: "1px",
                    fontWeight: "700",
                  }}
                >
                  GitHub
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="curve"></div>
      </div>
    </section>
  );
};
