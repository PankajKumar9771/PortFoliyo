import React, { useRef } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";

import { LightSpeed } from "react-swift-reveal";
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
import { toast } from "react-toastify";
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        {
          publicKey: import.meta.env.VITE_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          console.log("SUCCESS!");
          e.target.reset();
          toast.success("Email Sent !");
        },
        (error) => {
          toast.error(error);
        }
      );
  };

  return (
    <>
      <div className=" contact" id="contact">
        <div className="card card0 border-0">
          <div className="row">
            <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12">
              <div className="card1">
                <div className="row border-line">
                  <LightSpeed>
                    <img
                      src="https://img.freepik.com/free-photo/hot-line-contact-us-call-center-search-interface_53876-124009.jpg?w=2000"
                      alt="ocontact"
                      className="image"
                    />
                  </LightSpeed>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
           
                <div className="card2 d-flex card border-0 px-4 py-5">
                  <div className="row">
                    <div className="row">
                      <h6>
                        Contact With
                        <a
                          href="https://www.linkedin.com/in/pankaj-kumar-0566a3254/"
                          target="_blank"
                        >
                          <BsLinkedin color="blue" size={30} className="ms-2" />
                        </a>
                        <a
                          href="https://github.com/PankajKumar9771"
                          target="_blank"
                        >
                          {" "}
                          <BsGithub color="black" size={30} className="ms-2" />
                        </a>
                        <a
                          href="https://www.instagram.com/pankaj97kumarpatel/"
                          target="_blank"
                        >
                          {" "}
                          <BsInstagram
                            color="blue"
                            size={30}
                            className="ms-2"
                          />
                        </a>
                      </h6>
                    </div>
                    <form ref={form} onSubmit={sendEmail}>
                      <div className="row px-3 mb-4">
                        <div className="line" />
                        <small className="or text-center">OR</small>
                        <div className="line" />
                      </div>
                      <div className="row px-3">
                        <input
                          type="text"
                          name="user_name"
                          placeholder="Enter your Name"
                          className="mb-3 name"
                        />
                      </div>
                      <div className="row px-3">
                        <input
                          type="email"
                          name="user_email"
                          placeholder="Enter Your Email Address"
                          className="mb-3  email"
                        />
                      </div>
                      <div className="row px-3">
                        <textarea
                          type="text"
                          placeholder="Write your message"
                          className="mb-3 msg"
                          name="message"
                        />
                      </div>
                      <div className="row px-3">
                        <button className="button" type="submit" value="Send">
                          SEND MESSAGE
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
