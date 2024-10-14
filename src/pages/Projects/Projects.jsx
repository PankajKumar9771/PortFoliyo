import React from "react";
import "./Projects.css";
import { Spin } from "react-swift-reveal";
import WonderLust from "../../assets/images/WonderLust.png";
import FoodDel from "../../assets/images/FoodDel.png";
import School from "../../assets/images/School.png";
const Projects = () => {
  return (
    <>
      <div className="continer project" id="projects">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          TOP RECENT PROJECTS
        </h2>
        <hr />
        <p className="pb-3 text-center">
          Full-stack web application developer responsive and scalable web
          applications with its full implementation capabilities, such as travel
          planning apps, like WonderLust, for food delivery with secure JWT
          authentication and admin panel, then one more example with an
          interactive game, Simon Says. Expertise of this person probably
          includes each of the following technologies: React, Node.js, MongoDB,
          JavaScript.
        </p>
        {/* card design */}
        <div className="row" id="ads">
          <Spin>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Full stack</span>
                  <img src={WonderLust} />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">Node</span>
                  <span className="card-detail-badge">Express</span>
                  <span className="card-detail-badge">EJS</span>
                  <span className="card-detail-badge">Mongodb</span>
                </div>
                <div className="card-bodyV text-centerV">
                  <div className="ad-titleV m-autoV">
                    <h6 className="text-uppercaseV">
                      WonderLust Travelling Website
                    </h6>
                  </div>
                  <a
                    className="ad-btnV"
                    href="https://wonderlust-major.onrender.com/listings/"
                    target="_blank"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Frontend</span>
                  <img src={School} />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">MongoDB</span>
                  <span className="card-detail-badge">Express</span>
                  <span className="card-detail-badge">React</span>
                  <span className="card-detail-badge">NodeJs</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h6 className="text-uppercase">Springdale Public School</h6>
                  </div>
                  <a
                    className="ad-btn"
                    href="https://school-project-assigment.onrender.com/"
                    target="_blank"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Full-Stack</span>
                  <img src={FoodDel} />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">MongoDB</span>
                  <span className="card-detail-badge">Express</span>
                  <span className="card-detail-badge">React</span>
                  <span className="card-detail-badge">NodeJs</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h6 className="text-uppercase">Food Delivery App</h6>
                  </div>
                  <a
                    className="ad-btn"
                    href="https://github.com/PankajKumar9771/FoodDelBackend"
                    target="_blank"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>
          </Spin>
        </div>
      </div>
    </>
  );
};

export default Projects;
