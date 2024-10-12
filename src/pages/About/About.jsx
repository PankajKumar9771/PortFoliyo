import React from "react";
import "./About.css";
import profile from "../../assets/images/image.jpg";
import { Fade } from "react-swift-reveal";
const About = () => {
  return (
    <>
      <Fade bottom>
        <div className="about" id="about">
          <div className="row">
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
              <img src={profile} />
            </div>
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
              <h1>About me</h1>
              <p>
                I'm Pankaj Kumar, a passionate full-stack developer with
                expertise in building dynamic and responsive web applications.
                With a strong foundation in technologies like React, Node.js,
                MongoDB, and JavaScript, I have developed a variety of projects,
                including WonderLust, a travel planning platform, and a
                full-featured food delivery app with secure JWT authentication
                and an admin panel. My dedication to continuous learning and
                problem-solving drives me to create seamless, user-friendly
                digital experiences. Currently pursuing my BCA, I'm always
                excited to take on new challenges in the tech world.
              </p>
            </div>
          </div>
        </div>
      </Fade>
    </>
  );
};

export default About;
