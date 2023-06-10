import React from "react";
import "../../../front/img/beto.jpeg";
import "../../styles/aboutme.css";

const AboutMe = () => {
  return (
    <div className="container">
      <div className="d-flex flex-column align-items-center justify-content-center">
        <section id="about">
          <div className="d-flex flex-row align-items-center justify-content-center">
            <div>
              <h3>Alberto Valtierra</h3>
              <p class="subtitle">
                Full Stack Software Developer | Phoenix, Arizona
              </p>
            </div>
            <img src="beto.jpeg" alt="Your Name" className="my-3" />
          </div>
          <div className="text-center">
            <p>
              I'm Alberto Valtierra Jr, a full stack developer skilled in
              [JavaScript, React, Node.js, Python, SQL, PostgreSQL, Flask,
              Restful APIs, Scrum]. Having completed an intensive bootcamp, I'm
              enthusiastic about creating efficient, user-friendly web
              applications and continuously learning to stay up-to-date with
              industry trends.
            </p>
            <p>
              Outside of coding, I enjoy hiking & running, exercising, and
              photography/videography, which keeps me inspired and balanced.
            </p>
            <a href="/contactme" class="cta">
              Interested in working together? Get in touch here
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutMe;
